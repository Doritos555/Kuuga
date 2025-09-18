function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    resultado.style.display = "block";
    resultado.innerHTML = "⚠️ Por favor, insira valores válidos.";
    resultado.style.color = "red";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade grau I";
  } else if (imc < 39.9) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III";
  }

  resultado.style.display = "block";
  resultado.style.color = "#333";
  resultado.innerHTML = `
    📌 Peso informado: <b>${peso} kg</b><br>
    📏 Altura informada: <b>${altura} m</b><br>
    ⚖️ Seu IMC é <b>${imc.toFixed(2)}</b><br>
    ✅ Classificação: <b>${classificacao}</b>
  `;
}