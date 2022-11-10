const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmLitros = 10
const distanciaKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaKm / kmLitros

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto);
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto);
}

