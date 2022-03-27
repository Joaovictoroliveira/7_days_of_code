let lista_compras = [[], [], [], []];

function adicionaItem() {
    let categoria = prompt('Qual a categoria do item? [frutas | laticinios | verduras | doces]').toLowerCase();

    if(categoria === '' || categoria !== 'frutas' && categoria !== 'verduras' && categoria !== 'laticinios' && categoria !== 'doces') {
        alert('Escolha uma categoria');
        return;
    }

    let item = prompt('Qual item deseja adicionar?');

    if(item === '') {
        alert('Adicione um item a lista de compras');
        return;
    }

    switch(categoria) {
        case 'frutas':
            lista_compras[0].push(item);
            break;
        case 'laticinios':
            lista_compras[1].push(item);
            break;
        case 'verduras':
            lista_compras[2].push(item);
            break;
        case 'doces':
            lista_compras[3].push(item);
            break;
        default:
            alert('Escolha uma das opções permitidas');
            return;
    }
}

function mostraLista() {
    let resposta = document.querySelector('.resposta');

    for(let i = 0; i < lista_compras.length; i++) {
        resposta.innerHTML = `
                <p>Frutas:</p>
                <span>${lista_compras[0] ? lista_compras[0] : ''}</span>

                <p>Laticínios:</p>
                <span>${lista_compras[1] ? lista_compras[1] : ''}</span>
                
                <p>Verduras:</p>
                <span>${lista_compras[2] ? lista_compras[2] : ''}</span>
                
                <p>Doces:</p>
                <span>${lista_compras[3] ? lista_compras[3] : ''}</span>
        `;
    }
}

let btn_sim = document.querySelector('.btn_sim');
btn_sim.addEventListener('click', adicionaItem);

let btn_nao = document.querySelector('.btn_nao');
btn_nao.addEventListener('click', mostraLista);
