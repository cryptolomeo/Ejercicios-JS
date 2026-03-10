console.log('Ejercicio 8');

const app = document.getElementById('app');

// Campo de texto
const text = document.createElement('textarea');
text.id = 'textInput';
text.placeholder="Escribe aquí...";
text.rows = '5';
text.cols = '50';
app.append(text);

// Campo Leyenda: numero de caracteres - numero de palabras
const fieldSet = document.createElement('fieldset');
const title = document.createElement('legend');
title.innerHTML = '<strong>🟢​ Contador de Palabras y Caracteres escritos.</strong>';
const list = document.createElement('ul');
list.id = 'counter'

  // Caracteres
const char = document.createElement('li');
char.textContent = 'Número de carácteres: ';
let nChar = document.createElement('p');
nChar.textContent = '0';
char.appendChild(nChar);
list.appendChild(char);

  // Palabras
const words = document.createElement('li');
words.textContent = 'Número de palabras: '
let nWords = document.createElement('p');
nWords.textContent = '0';
words.appendChild(nWords);
list.appendChild(words);

  // Insertar en DOM
fieldSet.appendChild(title);
fieldSet.appendChild(list);
app.appendChild(fieldSet);

// Escuchador de eventos de pulsacion de tecla
// Conteo de caracteres:
    // 1.- Pulsacion de letras
text.addEventListener('keyup', (event) => {
  let inputText = text.value;
  console.log(`Caracteres: ${inputText.length}`);
  nChar.textContent = inputText.length;

// Conteo de palabras
  let palabras = inputText.split(' ');
  // Elimina elementos '' generados al pulsar space 2 veces
  palabras = palabras.filter(e => Boolean(e));
  console.log(`Palabras: ${palabras.length}`);
  nWords.textContent = palabras.length;
});




