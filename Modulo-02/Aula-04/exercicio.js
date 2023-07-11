"use strict";
const logProduct = (product) => console.log(product);
fetch('https://api.origamid.dev/json/notebook.json')
    .then(res => res.json())
    .then(json => logProduct(json));
