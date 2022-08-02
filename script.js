let quadrado0 = document.getElementsByClassName('color')[0];
quadrado0.style.backgroundColor = 'black';

let quadrado1 = document.getElementsByClassName('color')[1];
quadrado1.style.backgroundColor = 'yellowgreen';

let quadrado2 = document.getElementsByClassName('color')[2];
quadrado2.style.backgroundColor = 'salmon';

let quadrado3 = document.getElementsByClassName('color')[3];
quadrado3.style.backgroundColor = '#7231A7';

//

function criaElemento() {

for (let index = 0; index < 25; index += 1){

let pixel = document.createElement('div');

pixel.classList.add('pixel');

let paiDoPixel = document.getElementsByTagName('section')[1];

paiDoPixel.appendChild(pixel);

}
} criaElemento();