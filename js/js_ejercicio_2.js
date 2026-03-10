console.log('Ejercicio 2: Contador de Clics');
const textoClics = document.createElement('label');
textoClics.textContent = 'Clics: ';

const numeroClics = document.createElement('span');
numeroClics.textContent = '0';
textoClics.insertAdjacentElement('beforeend', numeroClics);

const button = document.createElement('button');
button.textContent = 'Contar Clics';

const app = document.getElementById('app');
app.append(textoClics);
app.appendChild(button);

button.addEventListener('click', (event) => {
  let num = parseInt(numeroClics.textContent)
  num += 1;
  numeroClics.textContent = num;
});
