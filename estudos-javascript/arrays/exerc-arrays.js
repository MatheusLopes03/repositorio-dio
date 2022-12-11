//Imprima todas as médias que ficaram de recuperação (média < 5).
for (let i = 0; i < medias.length; i++) {
  const nota = medias[i];
  if (nota < 5) {
    console.log("Recuperação: ", nota);
  }
}

//Imprimir a maior nota!
let notas = [2, 7, 3, 8, 10, 4];
notas.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;

  return 0;
});

console.log(`A maior nota é ${notas[5]}`);

//1- Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
const numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];

numeros.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;

  return 0;
});

for (let i = 9; i < numeros.length; i++) {
  const num = numeros[i];
  if (num % 2 === 0) {
    console.log(num);
  }
}
