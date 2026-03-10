console.log('Ejercicio 3: Lista Dinámica');

//creacion titulo, input y boton
const texto = document.createElement('p');
texto.textContent = 'Agregar tareas a la lista';

const divAgregar = document.createElement('div');

const input = document.createElement('input');

const button = document.createElement('button');
button.textContent = 'Agregar';

const app = document.getElementById('app');
const span = document.createElement('span');
span.appendChild(input);
span.appendChild(button);
app.appendChild(texto);
app.appendChild(span);

// creacion de lista dinamica
const listaDinamica = document.createElement('ul');
const title = document.createElement('p');
title.textContent = 'Lista:'
listaDinamica.appendChild(title);
app.appendChild(listaDinamica);


// creacion de escucha de evento del boton
button.addEventListener('click', (event) => {
  const li = document.createElement('li');
  const buttonRemove = document.createElement('button')
  buttonRemove.textContent = 'X';
  const buttonEdit = document.createElement('button')
  buttonEdit.textContent = 'Edit';

  // Validacion del input y agregado items a la lista
  if (input.value){
    li.textContent = input.value;
    input.value = ''; // vacia el input al pulsar boton
    li.appendChild(buttonRemove);
    li.appendChild(buttonEdit);
    listaDinamica.appendChild(li);
  } else {
    alert('Campo requerido');
  }

  // Funcion boton eliminar
  buttonRemove.addEventListener('click', () => {
    li.remove();
    buttonRemove.removeEventListener();
  });

  // Funcion boton editar
  buttonEdit.addEventListener('click', () => {
    const editElement = prompt('Edita el elemento:', li.firstChild.nodeValue);
    if (editElement) {
      li.firstChild.nodeValue = editElement;
    }

  });

});
