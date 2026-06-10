//npm init 
// npm express
// instalar extensão RapidAPI Client no vs code
const express = require("express")
const app = express() 
const port = 3001
app.use(express.json())

app.get("/nome", (req, res) => {
    res.json({nome: "monique", 
              idade: "15"
    })
})

// ultima parte
 app.listen(port, () => {
    console.log("API rodando naporta" + port )
}) 