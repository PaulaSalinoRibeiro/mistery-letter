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

    if( cartaTexto.value === '' ||  cartaTexto.value.trim() !== ' '){
        cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.'
    }
       
    if(cartaGerada.children !== 0){
        let spans = document.querySelectorAll('span');
        for(let index = 0; index < spans.length; index += 1){
            cartaGerada.removeChild(spans[index]);
        }
    }

    let frase = document.getElementById('carta-texto');
    let word = frase.value.split(' ');
    
    for(let index = 0; index < word.length; index += 1){
        let span = document.createElement('span');
        span.innerText = word[index];
        cartaGerada.appendChild(span);
    }     
} 

 
