"use strict";
const numeros = [10, 20, 30, 40, 50]; // : nuber[]
const valores = [10, 'taxas', 30, 'produto', 50, 30]; // : (number | string)[]
function maiorQue10(data) {
    return data.filter(n => n > 10);
}
function filtrarValores(data) {
    return data.filter(item => typeof item === 'number');
}
console.log(maiorQue10(numeros));
console.log(filtrarValores(valores));
const dados = [
    ['senhor dos aneir', 80],
    ['a guerra dos tronos', 120]
];
