const http = require('http')
const eventos = require('events')
const eventoEmissor = new eventos.EventEmitter()

const fim=()=>{console.log("fim do processo")}

eventoEmissor.on('msg', ()=>{console.log('Curso de node')})
eventoEmissor.on('fim',fim)

const porta = process.env.PORT || 3000
const retorno=()=>{console.log('servidor rodando')}


const servidor = http.createServer((req,res)=>{
    eventoEmissor.emit('msg')
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write("cfb cursos")
    eventoEmissor.emit('fim')
    res.end()
})

servidor.listen(porta, retorno)