const http = require("http")

http.createServer((req, res)=>{

    res.writeHead(200, {"Content-Type":"text/plain"})

    res.write("Ryan fazendo curso do CFB\nServidor de Node")
    res.end()

}).listen(1337)