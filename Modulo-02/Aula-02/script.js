const frase = 'Front end'
const preco = 500
const condi = preco > 100

console.log('Frase: ', typeof frase) // string
console.log('Preco: ', typeof preco) // number
console.log('Condi: ', typeof condi) // boolean
console.log('Objct: ', typeof {}) // object
console.log('Array: ', typeof []) // object
console.log('Null : ', typeof null) // object
console.log('Typeof: ', typeof typeof condi) // string
console.log('Preco is number: ', typeof preco === 'number') // true

const frase1 = new String('Front End')
const frase2 = String('Front End')
const frase3 = 'Front End'

console.log('String: ', typeof String) // function
console.log('Frase 1: ', typeof frase1) // object
console.log('Frase 2: ', typeof frase2) // string
console.log('Frase 3: ', typeof frase3) // string
