function verificaValidadeChute(chute) {
  // "+" Automaticamente converte para inteiro
  // Retorna NaN caso não seja convertido
  if ("GAME OVER" == chute.toUpperCase()) {
    document.body.innerHTML = `
    <h2>Jogo encerrado sem acerto</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `;
    return;
  }
  const numero = +chute;
  if (chuteNaoForNumerico(numero)) {
    elementoChute.innerHTML += "<div>Valor Inválido</div>";
    return;
  }
  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `
    <div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>
    O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i>
    </div>`;
  } else {
    elementoChute.innerHTML += `<div>
    O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i>
    </div>`;
  }
}
function chuteNaoForNumerico(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
