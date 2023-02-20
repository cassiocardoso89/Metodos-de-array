let livros = []
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivros()

async function getBuscarLivros(){
    const res = await fetch(endPointAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibeLivros(livrosComDesconto)
}
