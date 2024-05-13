(async ()=>{
    
    const db = require("./db")

    // console.log("Novo cliente inserido")
    // const n = "Braz"
    // const i = 24
    // await db.insereClientes({nome: n, idade: i})
    
    const id = 6
    const n = "Brazileiro"
    const i = 14
    await db.atualizaClientes(id, {nome: n, idade: i})
    console.log("Cliente atualizado")

    const deleteId = 5
    await db.deletarClientes(deleteId)

    console.log("Obter todos os clientes")
    const clientes = await db.todosClientes()
    console.log(clientes)

})()
