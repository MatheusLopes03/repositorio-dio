
/* Refazendo o segundo exercicio adcionando funções
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc (imc) {
    if (imc > 40) {
        return ('Obesidade Grave');
    } else if (imc >= 30) {
        return ('Obeso');
    } else if (imc >= 25) {
        return ('Acima do peso');
    } else if (imc >= 18.5) {
        return ('Peso nomal');
    } else {
        return ('Abaixo do peso');
    }
}

function main() {
    const peso = 70;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();

