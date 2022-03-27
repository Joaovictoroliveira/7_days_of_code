let tentativas = 3;
let numero_aleatorio = Math.floor(Math.random() * (10 - 1 + 1) + 1);

function acerte_o_numero() {
    while (tentativas > 0) {
        let tentativa = prompt('Digite um número');

        if (tentativa === null || Number(tentativa.value) < 1 || Number(tentativa.value) > 10) {
            alert('Digite um número entre 1 e 10');
            return;
        } else {
            if (Number(tentativa) === numero_aleatorio) {
                alert('Parabéns! Você acertou!!!');
                return;
            } else if (Number(tentativa) > numero_aleatorio) {
                tentativas -= 1;
                alert(`Talvez um pouco menos. Você ainda tem ${tentativas} tentativas`);
            } else if (Number(tentativa) < numero_aleatorio) {
                tentativas -= 1;
                alert(`Talvez um pouco mais. Você ainda tem ${tentativas} tentativas`);
            }
        }
    }

    return alert(`Fim de jogo! O número era ${numero_aleatorio}`);

}

let btn_tentativa = document.querySelector('.btn_tentativa');
btn_tentativa.addEventListener('click', acerte_o_numero);
