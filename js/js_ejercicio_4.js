console.log('Ejercicio 4: Filtro de Búsqueda en Tiempo Real');

const arrLista = ['boligrafo', 'lapiz', 'goma', 'rotulador', 'folio'];
const app = document.getElementById('app');

// Crear título
const title = document.createElement('h3');
title.textContent = 'Material escolar:';
app.appendChild(title);

// Funcion para crear lista html
function crearLista(arr) {
  const ul = document.createElement('ul');
  ul.id = "lista"

  arr.forEach((element) => {
    const newLi = document.createElement('li');
    newLi.textContent = element;
    ul.appendChild(newLi);
  });

  if (ul.hasChildNodes()) {
    title.insertAdjacentElement('afterend', ul);
  }
  else {
    debugger;
    const sinElementos = document.createElement('li');
    sinElementos.textContent = 'No existen elementos con ese filtro'
    ul.appendChild(sinElementos);
    title.insertAdjacentElement('afterend', ul);
  }

};

// Crear lista
crearLista(arrLista);

// Crear elemento de entrada de texto
const label = document.createElement('label');
label.setAttribute('for', 'filter');
label.textContent = 'Filtrar elementos:';
app.appendChild(label);

const input = document.createElement('input');
input.type = 'text';
input.id = 'filter';
app.appendChild(input);

// Escucha de evento para el filtro
let palabra = '';
input.addEventListener('keyup', (event) => {
  palabra = input.value.toLowerCase();
  console.log(palabra);
  const listaFiltrada = arrLista.filter((e) =>e.toLowerCase().includes(palabra));
  app.removeChild(document.getElementById('lista'));
  crearLista(listaFiltrada);
});
