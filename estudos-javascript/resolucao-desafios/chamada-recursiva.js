let n = parseInt(gets());
let soma = 0;

function somatorio(n) {
   if(n >= 0) {
    soma += n;
    somatorio(n - 1);
   }
   else print(soma);
}
somatorio(n);