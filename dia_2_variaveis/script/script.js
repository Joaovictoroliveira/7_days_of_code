function exibirMensagem() {
    let nome = document.querySelector('#nome').value;
    let idade = document.querySelector('#idade').value;
    let linguagem = document.querySelector('#linguagem').value;

    if(nome == '' || idade == '' || linguagem == '') {
        alert('Preencha todos os campos!');
        return;
    }

    let mensagem = `Ola ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
    alert(mensagem);

    let gostaLinguagem = prompt(`Você gosta de aprender ${linguagem}? [1 - Sim | 2 - Não]`);

    if(gostaLinguagem != '1' && gostaLinguagem != '2') {
        alert('Digite uma das opções fornecidas!')
    }else {
        if(gostaLinguagem == '1') {
            alert('Muito bom! Continue estudando e você terá muito sucesso!');
        }else {
            alert('Ahh que pena... Já tentou aprender outras linguagens?');
        }
    }

}

let btn = document.querySelector('.btn_enviar');
btn.addEventListener('click', exibirMensagem);
