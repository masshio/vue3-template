import { ViteDevServer, HmrContext } from "vite"
export default function socket() {
  return {
    name: 'socket',
    // 是用于配置开发服务器的钩子。
    configureServer(server: ViteDevServer) {
      server.ws.on('connection', (a, b) => {
        server.ws.send('my:greetings', { msg: 'hello' })
      })
      server.ws.on('my:from-client', (data, client) => {
        console.log('Message from client:', data.msg) 
        client.send('my:ack', { msg: 'Hi! I got your message!' })
      })

      server.middlewares.use((req, res, next) => {
        if(req.url?.includes('/api')) {
          res.end('get message')
        } else {
          next()
        }
      })
    },
    // 热更新
    handleHotUpdate(context: HmrContext) {
      const { timestamp, server, file } = context
      server.ws.send('fileUpdate', {
        timestamp,
        file
      })
    },
    transformIndexHtml(html: string) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        `<title>Title replaced!</title>`,
      )
    },
  }
}