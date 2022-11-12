/*
1) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

*/

//Imprima todas as médias que ficaram de recuperação (média < 5).
for (let i= 0; i < medias.length; i++) {
   const nota = medias[i];
   if (nota < 5){
      console.log('Recuperação: ', nota);
   }
}



//Imprimir a maior nota!
let notas = [2, 7, 3, 8, 10, 4];
notas.sort(function(a,b){
   if(a > b) return 1;
   if(a < b) return -1;

   return 0;
});

console.log(`A maior nota é ${notas[5]}`);




   
