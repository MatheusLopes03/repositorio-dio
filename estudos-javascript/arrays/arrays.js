/*
ANOTAÇÕES
1- Um array é uma variavel que possue varios elementos, onde cada elemento possue um valor e uma chave de identificação!
2- O .sort coloca os valorem em ordem!
3- length é e relação a quantos elementos existem na array.
*/

//Tabuada
const num = 5;
for (let i = 1; i < 11; i++) {
     console.log(i * num);    
}

//Imprimir números pares
const numeros = [4 ,2 ,8, 5, 19, 3, 11, 14];

for (let i = 0; i < numeros.length; i++) {
   const num = numeros[i]
   if (num %2 === 0){
   console.log(num);
   }
}
