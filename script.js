//Carne - 400 gr por pessoa     +6 horas - 650
//Cerveja = 1200 ml por pessoa    +6 horas - 2000ml
//Refrigerante/Agua - 1000 ml por pessoa + 6 horas 1500 ml

//Crianças vale por 0,5 Criança não bebe Alcool

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");





function calcular() {


    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let resultado = document.getElementById("resultado");

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    if (adultos == 00 || duracao == 00) {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<h3>PREENCHA OS DADOS CORRETAMENTE!</h3>`

    } else {
        resultado.innerHTML = `<h3>Você irá precisar ao todo de:</h3>`
        resultado.innerHTML += `<p>${qdtTotalCarne / 1000} Kg de Carne.</p>`
        resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 600)} Garrafas(600ml) de Cerveja.</p>`
        resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Pet's de 2L de Refrigerante ou suco.</p>`
    }


}


function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400;
    }

}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200;
    }

}
function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000;
    }

}
