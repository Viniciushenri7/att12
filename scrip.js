const header = document.querySelector('header');
const h1 = document.createElement('h1')
h1.innerHTML = "Meu site"
header.appendChild(h1);

const main = document.querySelector('main');
const div1 = document.createElement('div1');
const div2 = document.createElement('div2');
const h2 = document.createElement('h2');
const p = document.createElement('p');
const p1 = document.createElement('p1');
const h2a = document.createElement('h2a');

h2.innerHTML = "Seja bem vindo"
p.innerHTML = "Esta aqui"
h2a.innerHTML = "ola"
p1.innerHTML = "Tudo bem"
main.appendChild(div1);
main.appendChild(div2);
div1.appendChild(h2);
div1.appendChild(p);
div2.appendChild(h2a);
div2.appendChild(p1);

