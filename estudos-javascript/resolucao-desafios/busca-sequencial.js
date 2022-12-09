let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 
let valor = parseInt(gets());
const posicao = elementos.indexOf(valor);

function buscaSequencial() {
    if(posicao == -1){
        return `Número ${valor} não encontrado`
    } 
    
    else {
        return `Achei ${valor} na posição ${posicao}`
    }
}