let produto = 'livro'
const preco = 200

const carro = {
  marca: 'audi',
  portas: 4
}

const barato = preco < 400 ? true : 'produto caro'

function somar (a: number, b: number) {
  return a + b
}

somar(1, 2)

const nintendo = {
  nome: 'Nintendo',
  preco: '2000'
}

function transformarPreco (produto: {nome: string; preco: string}) {
  produto.preco = 'R$ ' + produto.preco
  return produto
}
