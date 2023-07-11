"use strict";
let total = 200;
total = "400";
function isNumber(value) {
    return typeof value === "number";
}
// const isNumber = (value: string | number) : boolean => typeof value === "number"
console.log(isNumber("200"));
// Retorna HTMLButtonElement | null
const button = document.querySelector("button");
// Optional chaining
// Executa click() se button for diferente de null ou undefined
button?.click();
