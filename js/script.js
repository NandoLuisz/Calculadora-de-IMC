const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const btnCalcular = document.querySelector("#form-box");
const kilo = document.querySelector("#kg");
const situacao = document.querySelector("#situacao");

btnCalcular.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorPeso = inputPeso.value;
  const valorAltura = inputAltura.value.replace(",", ".");

  console.log(valorAltura);

  const imc = calculoIMC(valorPeso, valorAltura);

  const indice = classificacaoIMC(imc);

  if (resultado.style.display === "none") {
    resultado.style.display = "block";
    kilo.innerHTML = imc.toFixed(2);
    situacao.innerHTML = indice;
  } else {
    resultado.style.display = "none";
  }
});

// Calculo do IMC

function calculoIMC(peso, altura) {
  const imc = peso / (altura * altura);

  return imc;
}

function classificacaoIMC(indice) {
  const baixoPeso = "Baixo Peso";
  const pesoNormal = "Peso Normal";
  const excesPeso = "Exc. de Peso";
  const obesidade = "Obesidade";
  const obsedidadeExtrema = "Obs. Extrema";

  if (indice < 18.5) {
    return baixoPeso;
  } else if (18.5 < indice && indice <= 24.9) {
    return pesoNormal;
  } else if (25 < indice && indice <= 29.9) {
    return excesPeso;
  } else if (30 < indice && indice <= 34.9) {
    return obesidade;
  } else return obsedidadeExtrema;
}
