let area;
let escolha_carreira;

function area_desejada(e) {
    e.preventDefault();
    
    area = document.querySelector('input[name="area"]:checked').value;
    let area_front = document.querySelector('.area_front');
    let area_back = document.querySelector('.area_back');

    if(area === 'front_end') {
        area_front.style.display = 'block';
        btn_aprendizado.style.display = 'block';
        area_back.style.display = 'none';
    }
    
    if(area === 'back_end') {
        area_back.style.display = 'block';
        btn_aprendizado.style.display = 'block';
        area_front.style.display = 'none';
    }
    
    console.log(area === 'front_end')
}

function area_aprendizado(e) {
    e.preventDefault();

    if(area === 'front_end') {
        escolha_carreira = document.querySelector('#escolha_front').value;
    }else {
        escolha_carreira = document.querySelector('#escolha_back').value;
    }

}

function desenvolvimento_profissional(e) {
    e.preventDefault();

    let tecnologias_desejadas = true;
    let tecnologia;

    let escolha_profissional = document.querySelector('input[name="escolha_profissional"]:checked').value;

    if(escolha_profissional === 'especializar') {
        alert(`Você irá se especializar em ${escolha_carreira}! Que legal!!`);
    }

    if(escolha_profissional === 'fullstack') {
        alert('Você seguirá se desenvolvendo até se tornar fullstack! Boa sorte!');
    }

    while(tecnologias_desejadas) {
        tecnologia = prompt('Qual tecnologia gostaria de aprender? [1 para sair]');

        if(tecnologia === '1') {
            tecnologias_desejadas = false;
            return;
        }

        alert(`Você quer aprender ${tecnologia}? Que legal!`);
    }
}

let btn_area = document.querySelector('.btn_area');
let btn_aprendizado = document.querySelector('.btn_aprendizado');
let btn_profissional = document.querySelector('.btn_profissional');

btn_area.addEventListener('click', area_desejada);
btn_aprendizado.addEventListener('click', area_aprendizado);
btn_profissional.addEventListener('click', desenvolvimento_profissional);
