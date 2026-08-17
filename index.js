// No terminal: 
// npm init
// npm i express
// node index.js -> executa a API
// instalar extensão RapidAPI Client no VSCode
const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
const fs = require('fs')

app.post("/aulas", (req, res) => {
    const aula = req.body
    try {
        // abrir o arquivo
        const aulas = JSON.parse(fs.readFileSync("aulas.json", "utf8"))
        // adicionar o cliente
        aulas.push(aula)
        // salvar o arquivo
        fs.writeFileSync("aulas.json", JSON.stringify(aulas), "utf8")
        // resposta
        res.status(201).json({resposta: "Aula cadastrada!"})
    } catch (erro) {
        res.status(500).json({erro: erro.message})
    }
}) 
app.listen(port, ()=>{
    console.log("API rodando na porta" + port)
})
