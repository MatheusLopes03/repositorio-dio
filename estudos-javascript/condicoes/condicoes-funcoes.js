/* Terceiro exercicio implementando funções

3 - Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarDesconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}

function aplircarJuros(valor, juros) {
  return valor + valor * (juros / 100);
}

const precoEtiqueta = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
  console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaPagamento === 2) {
  console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaPagamento === 3) {
  console.log(precoEtiqueta);
} else {
  console.log(aplircarJuros(precoEtiqueta, 10));
}

//Função para verfircar nome e maioridade.

function escrevaMeuNome(nome) {
  console.log("Meu nome é " + nome);
}

escrevaMeuNome("Matheus");

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
}

verificarIdade(19);
