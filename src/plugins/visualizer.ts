import fs from 'node:fs'
import path from 'node:path'
import { InputOptions, OutputOptions, OutputAsset, OutputChunk } from 'rollup'
let startTime : number
interface OutputBundle { [fileName: string]: OutputAsset | OutputChunk }
export default function visualizer() {
  return {
    name: 'visualizer',
    options(option: InputOptions) {
      startTime = Date.now()
    },
    async generateBundle(outputOptions: OutputOptions, outputBundle: OutputBundle) {
      // fs.writeFileSync(path.join("./", 'bundle.txt'), bundle);
      // console.log("🚀 ~ file: visualizer.ts:8 ~ generateBundle ~ bundle:", bundle['assets/tailwind-074374d2.js'])
      let jsSize = 0
      let cssSize = 0
      let htmlSize = 0
      let imageSize = 0
      let fontSize = 0
      for (const [bundleId, bundle] of Object.entries(outputBundle)) {
        let type = path.extname(bundle.fileName).slice(1);
        let size =  (bundle as OutputChunk)?.code?.length || (bundle as OutputAsset)?.source?.length;
        switch (type) {
          case "js":
            jsSize += size;
            break;
          case "css":
            cssSize += size;
            break;
          case "jpg":
          case "jpeg":
          case "png":
          case "gif":
          case "svg":
            imageSize += size;
            break;
          case "html":
            htmlSize += size;
            break;
          case "woff":
          case "woff2":
          case "ttf":
          case "otf":
            fontSize += size;
            break;
          default:
            break;
        }
      }
      console.log(`打包时长: ${(Date.now() - startTime) / 1000}s`);
      console.log('各类文件大小', jsSize, cssSize, htmlSize, imageSize, fontSize);
      
    },
  };
}