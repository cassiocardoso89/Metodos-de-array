const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', FiltrarLivros))

function FiltrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? FiltrarPorDisponibilidade() : FiltrarPorCategoria(categoria)
    ExibeLivros(livrosFiltrados)
    if(categoria == 'disponivel'){
        const valorTotal = CalcularValorTotalDosLivrosDisponiveis(livrosFiltrados)
        ExibeValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function FiltrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function ExibeValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoComValorTotaldeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2)}</span></p>
    </div>
  `
}