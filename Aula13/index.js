const { MongoClient } = require('mongodb')
const url = "mongodb+srv://Ryan:senhateste@cluster0.6z85s8b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function run() {
    const banco = new MongoClient(url);
    try {
        await banco.connect();

        const dbo = banco.db("Cursos"); //Criação do banco de dados
        const obj = { curso: "Curso de Java", aluno: "Ryan Barbosa" }; //Inserindo dados dentro da tabela "Cursos"
        const coleção = "curso";

        await dbo.collection(coleção).insertOne(obj);
        console.log("1 novo curso inserido");
    } finally {
        // Garante que o cliente fechará quando você terminar/errar
        await banco.close();
    }
}
run().catch(console.dir);