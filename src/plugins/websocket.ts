import { ViteDevServer } from "vite"
export default function socket() {
  return {
    name: 'socket',
    configureServer(server: ViteDevServer) {
      server.ws.on('connection', (a, b) => {
        server.ws.send('my:greetings', { msg: 'hello' })
      })
      server.ws.on('my:from-client', (data, client) => {
        console.log('Message from client:', data.msg) // Hey!
        // reply only to the client (if needed)
        server.ws.send('my:ack', { msg: 'Hi! I got your message!' })
      })
    }
  }
}