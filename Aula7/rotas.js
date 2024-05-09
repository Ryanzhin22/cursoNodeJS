const express = require('express')
const rotas = express.Router()

let cursosInfo = [
    {'curso':'node','info':'curso de node'},
    {'curso':'react','info':'curso de react'},
    {'curso':'java','info':'curso de java'},
    {'curso':'arduino','info':'curso de arduino'}
]

rotas.get('/',(req,res)=>{
    res.json({
        ola:"Seja bem vindo"
    })
})

rotas.get('/:cursoname',(req,res)=>{
    const curso = req.params.cursoname
    const cursoInfomation = cursosInfo.find(i=>i.curso == curso)
    if(!cursoInfomation){
        res.status(404).json(
            {erro:"Curso não encontrado", cursoPesquisado:curso}
        )
    }else{
        res.status(200).json(cursoInfomation)
    }
})

module.exports = rotas