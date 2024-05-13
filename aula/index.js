(async ()=>{
    
    const db = require("./db")
    console.log("Inserir novo cliente")
    const n = "Braz"
    const i = 24
    await db.insereClientes({nome: n, idade: i})

    console.log("Obter todos os clientes")
    const clientes = await db.todosClientes()
    console.log(clientes)

})()
