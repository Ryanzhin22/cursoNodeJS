const http = require('http')
const porta = process.env.PORT

const servidor = http.createServer((req,res)=>{

    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write('Testando servidor')
    res.end()

})

servidor.listen(porta || 3000, ()=>{console.log("Servidor Rodando")})