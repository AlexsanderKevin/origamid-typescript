"use strict";
let produto = 'livro';
const preco = 200;
const carro = {
    marca: 'audi',
    portas: 4
};
const barato = preco < 400 ? true : 'produto caro';
function somar(a, b) {
    return a + b;
}
somar(1, 2);
const nintendo = {
    nome: 'Nintendo',
    preco: '2000'
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
