const produtos = ["Detergente", "Amaciante", "Sabão", "Qboa", "Papel Higienico", "Brinquedos", "Sapatos", "Absorvente", "Chocolate", "Papel Toalha"]
const precos = [4,10,5,13,20,30,90,15,10,6]

function mostraEstoque(){

console.log("*** MOSTRA ESTOQUE ***")

let i = 0;
while(i < produtos.length){
    console.log(produtos[i]+ " R$ " + precos[i] + ",00")
    i++
}

}

mostraEstoque();

