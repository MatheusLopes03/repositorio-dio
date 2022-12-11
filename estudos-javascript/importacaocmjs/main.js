const { gets, print } = require("./funcoes-auxiliares");

const quantidadeAlunos = gets();
let maiorValor = 0;
let menorVlaor = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
  const numSorteado = gets();
  if (numSorteado > maiorValor) {
    maiorValor = numSorteado;
  }
}
for (let i = 0; i < quantidadeAlunos; i++) {
  const numSorteado = gets();
  if (numSorteado > menorVlaor) {
    menorVlaor = numSorteado;
  }
}

print(menorVlaor);
print(maiorValor);
