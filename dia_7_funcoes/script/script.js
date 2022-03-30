function dados_operacao() {
    const primeiro_numero = Number(prompt('Digite o primeiro número'));

    if(isNaN(primeiro_numero)) {
        alert('Digite um número');
        return;
    }

    const segundo_numero = Number(prompt('Digite o segundo número'));

    if(isNaN(segundo_numero)) {
        alert('Digite um número');
        return;
    }

    return [primeiro_numero, segundo_numero];
}

function adicao() {
    [primeiro_numero, segundo_numero] = dados_operacao();
    const soma = primeiro_numero + segundo_numero;
    alert(`${primeiro_numero} + ${segundo_numero} = ${soma}`);
}

function subtracao() {
    [primeiro_numero, segundo_numero] = dados_operacao();
    const subtracao = primeiro_numero - segundo_numero;
    alert(`${primeiro_numero} - ${segundo_numero} = ${subtracao}`);
}

function multiplicacao() {
    [primeiro_numero, segundo_numero] = dados_operacao();
    const multiplicacao = primeiro_numero * segundo_numero;
    alert(`${primeiro_numero} * ${segundo_numero} = ${multiplicacao}`);
}

function divisao() {
    [primeiro_numero, segundo_numero] = dados_operacao();
    const divisao = primeiro_numero / segundo_numero;
    alert(`${primeiro_numero} / ${segundo_numero} = ${divisao}`);
}

function sair() {
    alert('Até a próxima!');
    return;
}

let btn_adicao = document.querySelector('.adicao');
btn_adicao.addEventListener('click', adicao);

let btn_subracao = document.querySelector('.subtracao');
btn_subracao.addEventListener('click', subtracao);

let btn_multiplicacao = document.querySelector('.multiplicacao');
btn_multiplicacao.addEventListener('click', multiplicacao);

let btn_divisao = document.querySelector('.divisao');
btn_divisao.addEventListener('click', divisao);

let btn_sair = document.querySelector('.sair');
btn_sair.addEventListener('click', sair);
