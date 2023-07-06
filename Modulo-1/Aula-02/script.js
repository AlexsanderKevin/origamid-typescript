const produtos = [
  {
    nome: 'O senhor dos aneis',
    tipo: 'livro'
  },
  {
    nome: 'A guerra dos Tronos',
    tipo: 'livro'
  },
  {
    nome: 'Dark Souls',
    tipo: 'jogo'
  }
]

function filtrarLivros(dados) { // a função não sabe que receberá um array de produtos
  return dados.filter(item => item.tipo === 'livro') // a função não sabe o tipo dos 'items'
}

console.log(filtrarLivros(produtos))
