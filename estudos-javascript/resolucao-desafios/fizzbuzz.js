let resultado = parseInt(gets());
print(fizzBuzz(resultado));

function fizzBuzz(resultado) {
  const m3 = resultado % 3 === 0;
  const m5 = resultado % 5 === 0;

  if (m3 && m5) {
    return "FizzBuzz";
  } else if (m3) {
    return "Fizz";
  } else if (m5) {
    return "Buzz";
  } else {
    return resultado;
  }
}
