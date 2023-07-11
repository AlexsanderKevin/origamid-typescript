"use strict";
function preencherDados(dados) {
    document.body.innerHTML = `
      <div>
        <h2>${dados.nome}</h2>
        <p>R$${dados.preco}</p>
        <p>Inclui teclado: ${dados.teclado ? 'sim' : 'nao'}</p>
      </div>
    `;
}
preencherDados({
    nome: 'Computador',
    preco: 1500,
    teclado: true
});
function pintarCategoria(categoria) {
    console.log(categoria);
}
pintarCategoria('design');
