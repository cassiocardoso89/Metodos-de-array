let livros = []
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

GetBuscarLivros()

async function GetBuscarLivros(){
    const res = await fetch(endPointAPI)
    livros = await res.json()
    let livrosComDesconto = AplicarDesconto(livros)
    ExibeLivros(livrosComDesconto)
}
