//@ts-check
const frase = 'Front End'
const numero = 100.05
const empresas = ['Apple', 'SOny']

console.log(frase.toLowerCase())
// console.log(numero.toLowerCase())

console.log(numero.toFixed()) // o método toFixed() retorna uma String
// console.log(frase.toFixed())

console.log(
  empresas.map(empresa => empresa.toLowerCase())
)

const body = document.body // body : HTMLElement

console.log(body.style)

const button =  document.querySelector('button')
button.addEventListener('click', () => console.log('click'))

button.click()

const operacao = 100 + true // result: 101
console.log('operacao: ', operacao)


