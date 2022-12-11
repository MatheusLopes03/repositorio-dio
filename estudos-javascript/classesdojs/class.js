/* 
1- Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  gastoPorKm;

  constructor(marca, cor, gastoPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoPorKm = gastoPorKm;
  }

  calcularGastoPercurso(distanciaKm, precoCombustivel) {
    return distanciaKm * this.gastoPorKm * precoCombustivel;
  }
}

const uninhotunado = new Carro("Fiat", "Vermelho", 1 / 13);
console.log(uninhotunado);
console.log(uninhotunado.calcularGastoPercurso(73, 5));

/*
2- Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / (this.altura * this.altura);
  }
  classificarImc() {
    const imc = this.calcularImc();

    if (imc > 40) {
      return "Obesidade Grave";
    } else if (imc >= 30) {
      return "Obeso";
    } else if (imc >= 25) {
      return "Acima do peso";
    } else if (imc >= 18.5) {
      return "Peso nomal";
    } else {
      return "Abaixo do peso";
    }
  }
}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose);
console.log(jose.classificarImc());
