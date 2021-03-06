const container = document.getElementById('container');
let cartaTexto = document.createElement('input');
container.appendChild(cartaTexto);
cartaTexto.id = 'carta-texto';
cartaTexto.type = 'text';
cartaTexto.placeholder = 'Digite aqui seu texto'

let cartaGerada = document.createElement('p');
container.appendChild(cartaGerada);
cartaGerada.id = 'carta-gerada';

let criarCarta = document.createElement('button');
container.appendChild(criarCarta);
criarCarta.id = 'criar-carta';
criarCarta.innerText = 'Criar Carta'

criarCarta.addEventListener('click', createdLetter);

function createdLetter(){
   
    if(cartaGerada.children !== 0) {
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
    
    if( cartaTexto.value === ''){
        cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.'
    } 
} 


function randonStyle() {
    let sizeGroup = ['medium', 'big', 'reallybig'];
    let styleGroup = ['newspaper', 'magazine1', 'magazine2'];
    let rotateGroup = ['rotateleft', 'rotateright'];
    let skewGroup = ['skewleft', 'skewright'];

    let randonIndex1 = Math.floor(Math.random()*3);
    let randonIndex2 = Math.floor(Math.random()*2);

    let style = sizeGroup[randonIndex1] + ' ' +  styleGroup[randonIndex1] + ' ' + rotateGroup[randonIndex2] + ' ' + skewGroup[randonIndex2]

    return style;  
}

criarCarta.addEventListener('click', addStyle);

function addStyle() {
    let spans = document.querySelectorAll('span');
    for(let index = 0; index < spans.length; index += 1){
        spans[index].className = randonStyle();
    } 
} 


cartaGerada.addEventListener('click', changeStyle);

function changeStyle() {
    let spans = document.querySelectorAll('span');
    for(let index = 0; index < spans.length; index += 1){
        spans[index].className = randonStyle();
    }
} 

let paragraph = document.createElement('p');
paragraph.id = 'carta-contador';
container.appendChild(paragraph);

criarCarta.addEventListener('click', count);

function count() {
    let frase = cartaTexto.value.trim();
    let words =  frase.split(' ');
    paragraph.innerText = words.length;
}  
