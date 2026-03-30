const produtos = ["Detergente", "Amaciante", "Sabão", "Qboa", "Papel Higienico", "Brinquedos", "Sapatos", "Absorvente", "Chocolate", "Papel Toalha"]
const precos = [4,10,5,13,20,30,90,15,10,6]

function mostreEstoque(){
    console.log(" === Estoque===")
    let contador = 0 
    while(contador < produtos.length){ 
        console.log(produtos[contador] + " - " + precos[contador])
        contador = contador + 1 
    }
}

 mostreEstoque()


 function adicionarEstoque(nome,preco){
produtos.push(nome)
precos.push(preco)
console.log("=Produto adicionado=")
 }
 adicionarEstoque ("creme dental", 5)
 
 function removerProduto (indice){
    produtos.splice(indice, 1)
    precos.splice(indice,1)
 }



 removerProduto()
 mostreEstoque()
