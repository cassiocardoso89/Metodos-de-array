let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdernarPorPreco.addEventListener('click', OrdenarLivrosPorPreco)

function OrdenarLivrosPorPreco(){
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    ExibeLivros(livrosOrdenados)
}