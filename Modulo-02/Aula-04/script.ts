interface Produto {
  nome: string
  preco: number
  teclado: boolean
}

function preencherDados (dados: Produto) {
    document.body.innerHTML = `
      <div>
        <h2>${dados.nome}</h2>
        <p>R$${dados.preco}</p>
        <p>Inclui teclado: ${dados.teclado ? 'sim' : 'nao'}</p>
      </div>
    `
}

preencherDados({
  nome: 'Computador',
  preco: 1500,
  teclado: true
})

type Categoria = 'design' | 'codigo' | 'descod'

function pintarCategoria(categoria: Categoria) {
  console.log(categoria)
}

pintarCategoria('design')
