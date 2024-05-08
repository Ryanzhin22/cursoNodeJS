const express = require('express')
const app = express()
const porta = process.env.PORT

app.get('/',(req,res)=>{

    res.send('Seja bem vindo')

})

app.listen(porta || 3000, ()=>{console.log('rodando')})