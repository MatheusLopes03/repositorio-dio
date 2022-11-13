//Imprima o maior e o menor número deste conjunto.

const entradas = [5, 50, 120, 98, 23, 99, 1];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}


module.exports = { gets, print };