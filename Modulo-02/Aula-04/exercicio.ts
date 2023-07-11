interface Empresa {
  nome: string
  fundacao: number
  pais: string
}

interface Product {
  nome: string
  preco: number
  descricao: string
  garantia: string
  seguroAcidentes: boolean
  empresaFabricante: Empresa
  empresaMontadora: Empresa
}

const logProduct = (product: Product) : void => console.log(product)

fetch('https://api.origamid.dev/json/notebook.json')
.then(res => res.json())
.then(json => logProduct(json))
