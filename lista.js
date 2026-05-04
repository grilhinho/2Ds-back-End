// Modelo da lista de objetos para o projeto 2:
const produtos = [
   {
       nome: "Diario de uma apotecaria",
       ano: 2023,
       temporadas: 2,
       genero: "Mistério, Drama, Histórico",
       autor: "Natsu Hyūga / TOHO animation STUDIO & OL",
       classificação: +14,
     
   },
   {
       nome: "DanDaDan",
       ano: 2024,
       temporadas: 1,
       genero: "Sobrenatural, Comédia, Ação",
       autor:  " Yukinobu Tatsu / Science SARU",
       classificação: +16,
   },
   {   nome: "Jujutsu Kaisen",
       ano: 2020,
       temporadas: 2,
       genero: "Ação, Sobrenatural ",
       autor: "Gege Akutami / MAPPA",
       classificação: +16,


   },
   {
       nome: "Blue Box",
       ano: 2024,
       temporadas: 1,
       genero: "Romance, Esporte",
       autor: "Kouji Miura / Telecom Animation Film",
       classificação: +14,
   },
   {
       nome: "death note",
       ano: 2006,
       temporadas: 1,
       genero: "Suspense, Sobrenatural, Policial",
       autor: "Tsugumi Ohba / Madhouse",
       classificação: +18,
   },
   {
       nome: "Blue Eye Samurai",
       ano: 2023,
       temporadas: 1,
       genero: "Ação e suspense",
       autor: "Amber Noizumi e Michael Green / Blue Spirit",
       classificação: +18,
   },
   {
       nome: "O Menino e a Garça",
       ano: 2023,
       temporadas: "filme unico",
       genero: " drama",
       autor: " Studio Ghibli",
       classificação: "livre",
   },
   {
       nome: " A viagem de chiriro",
       ano: 1999,
       temporadas: "filme unico",
       genero: "drama",
       autor: " Studio Ghibli",    
       classificação: "Livre",
   },
   {
       nome: "Haikyu!!",
       ano: 2014,
       temporadas: 4,
       genero: "Esporte",
       autor: "Kouji Miura / Telecom Animation Film",
       classificação: +14,
   },
   {
       nome: "meu casamento feliz",
       ano: 2024,
       temporadas: 1,
       genero: "Romance, Esporte",
       autor: "Kouji Miura / Telecom Animation Film",
       classificação: +14,
   }, ]
// Criar o JSON:
const produtosJSON = JSON.stringify(produtos)
console.log(produtosJSON)

// Criar o arquivo
const fs = require("fs")
fs.writeFileSync("produtos.json", produtosJSON)

// Ler o arquivo
const produtosArquivo = require("./produtos.json")
console.log(produtosArquivo)
