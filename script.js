const quadrado0 = document.getElementsByClassName('color')[0];
quadrado0.style.backgroundColor = 'black';

const quadrado1 = document.getElementsByClassName('color')[1];
quadrado1.style.backgroundColor = 'yellowgreen';

const quadrado2 = document.getElementsByClassName('color')[2];
quadrado2.style.backgroundColor = 'salmon';

const quadrado3 = document.getElementsByClassName('color')[3];
quadrado3.style.backgroundColor = '#7231A7';

const corInicial = document.querySelector('.black');
corInicial.classList.add('selected');

//

const boardPrincipal = document.querySelector('#pixel-board');

function criaElemento(lado) {
  for (let index = 0; index < lado * lado; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    boardPrincipal.style.width = `${46 * lado}px`;

    const paiDoPixel = document.getElementsByTagName('section')[1];

    paiDoPixel.appendChild(pixel);
  }
} criaElemento(5);

//

const coresDisponiveis = document.querySelectorAll('.color');

function selectColor(event) {
  for (let index = 0; index < coresDisponiveis.length; index += 1) {
    coresDisponiveis[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

for (let index = 0; index < coresDisponiveis.length; index += 1) {
  coresDisponiveis[index].addEventListener('click', selectColor);
}

//

const quadradinho = document.querySelectorAll('.pixel');

function mudaCor(event) {
  const corSelecionada = document.querySelector('.selected').style.backgroundColor;
  const evt = event.target;
  evt.style.backgroundColor = corSelecionada;
}

for (let index = 0; index < quadradinho.length; index += 1) {
  quadradinho[index].addEventListener('click', mudaCor);
}

// 9

const clear = document.querySelector('#clear-board');

function apagaCor() {
  for (let index = 0; index < quadradinho.length; index += 1) {
    quadradinho[index].style.backgroundColor = 'white';
  }
}

clear.addEventListener('click', apagaCor);

// 10

const inputVazio = document.querySelector('#board-size');
const botaoVQV = document.querySelector('#generate-board');

function verificaInput() {
  if (inputVazio.value === '') {
    alert('Board inválido!');
    return;
  }
  if (inputVazio.value >= 5 && inputVazio.value <= 50) {
    boardPrincipal.innerHTML = '';
    criaElemento(inputVazio.value);
    return;
  }
  if (inputVazio.value > 50) {
    boardPrincipal.innerHTML = '';
    criaElemento(50);
    return;
  }
  boardPrincipal.innerHTML = '';
  criaElemento(5);
}

botaoVQV.addEventListener('click', verificaInput);
