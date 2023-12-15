"use strict";
// Seu código JavaScript aqui

// Declarando variáveis
let myVariable = 10;
const pi = 3.14;

// Evitando variáveis globais
(function() {
    let localVariable = "Esta é uma variável local.";
    // Resto do código aqui
})();

// Exemplo de função
function addNumbers(a, b) {
    return a + b;
}
// Chamando a função
let result = addNumbers(5, 10);

try {
    // Código suscetível a erros
    // ...
} catch (error) {
    // Tratamento de erro
    console.error("Ocorreu um erro:", error);
}

