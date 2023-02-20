let livros = []
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivros()

const livrosElement = document.getElementById('livros')


async function getBuscarLivros(){
    const res = await fetch(endPointAPI)
    livros = await res.json()
    console.table(livros)
    exibeLivros(livros)
}

function exibeLivros(listaDeLivros){
    listaDeLivros.forEach(livro => {
        livrosElement.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}/>
            <h2 class="livro__titulo>${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$ ${livro.preco}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}