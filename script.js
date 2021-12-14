const container = document.getElementById('container');
let cartaTexto = document.createElement('input');
container.appendChild(cartaTexto);
cartaTexto.id = 'carta-texto';
cartaTexto.type = 'text';

let cartaGerada = document.createElement('p');
container.appendChild(cartaGerada);
cartaGerada.id = 'carta-gerada';

let criarCarta = document.createElement('button');
container.appendChild(criarCarta);
criarCarta.id = 'criar-carta';
criarCarta.innerText = 'Criar Carta'

criarCarta.addEventListener('click', createdLetter);

function createdLetter(){
    let span = document.createElement('span');
    cartaGerada.appendChild(span);
    span.innerText = cartaTexto.value;

    if(cartaTexto.value === ''){
        cartaGerada.innerText = 'Por favor, digite o conteúdo da carta'
    }

}