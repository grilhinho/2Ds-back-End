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


const arquivoID = JSON.parse(fs.readFileSync("id.json", "utf8"))
let id = arquivoID.id

function atualizarID() {
    id = id + 1
    fs.writeFileSync("id.json", JSON.stringify({id: id}), "utf8")
}


app.post("/aulas", (req, res) => {
    const aula = req.body
    try {
        const aulas = JSON.parse(fs.readFileSync("aulas.json", "utf8"))
        aulas.push(aula)
        fs.writeFileSync("aulas.json", JSON.stringify(aulas), "utf8")
        res.status(201).json({resposta: "Aula cadastrada!"})
    } catch (erro) {
        res.status(500).json({erro: erro.message})
    }
})

app.get("/aulas", (req, res) => {
    try {
        const aulas= JSON.parse(fs.readFileSync("aulas.json", "utf8"))
        res.status(200).json({resposta: aulas})
    } catch (erro) {
        res.status(500).json({erro: erro.message})
    }
})


app.get("/aulas/:id", (req, res) => {
    const id = req.params.id
    try {
        const aulas = JSON.parse(fs.readFileSync("aulas.json", "utf8"))
        const aula = aulas.find((aula) => aulas.id == id)
        if(!aulas) {
            return res.status(404).json({erro: "Aula não existe!"})
        }
        res.status(200).json({resposta: aulas})
    } catch (erro) {
        res.status(500).json({erro: erro.message})
    }
})

app.delete("/aulas/:id", (req, res) => {
    const id = req.params.id
    try {
        const aulas = JSON.parse(fs.readFileSync("aulas.json", "utf8"))
        const indiceAula = aulas.findIndex((aulas) => aulas.id == id)
        if (indiceAula == -1) {
            return res.status(404).json({erro: "A aula não existe"})
        }
        aulas.splice(indiceAula, 1)
        fs.writeFileSync("aulas.json", JSON.stringify(aulas), "utf8")
        res.status(200).json({resposta: "aula excluída com sucesso!"})
    } catch (error){
        res.status(500).json({erro: error.message})
    }
})

app.listen(port, ()=>{
    console.log("API rodando na porta" + port)
})
