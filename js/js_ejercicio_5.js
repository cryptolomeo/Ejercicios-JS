console.log('Ejercicio 5: Calculadora Sencilla');

// Entradas de datos
const spanNumeros = document.createElement('span');
spanNumeros.id = 'numeros';
const n1 = document.createElement('input');
n1.id = 'n1'
n1.type = 'number';
const n2 = document.createElement('input');
n2.type = 'number';
n2.id = 'n2';
spanNumeros.appendChild(n1);
spanNumeros.appendChild(n2);
const app = document.getElementById('app');
app.appendChild(spanNumeros);

// Crear botones
const spanBotones = document.createElement('span');
spanBotones.id = 'buttonBox';
const suma = document.createElement('button');
suma.textContent = '+';
const resta = document.createElement('button');
resta.textContent = '-';
const multiplicacion = document.createElement('button');
multiplicacion.textContent = 'x'
const division = document.createElement('button');
division.textContent = '%';
spanBotones.appendChild(suma)
spanBotones.appendChild(resta)
spanBotones.appendChild(multiplicacion)
spanBotones.appendChild(division);
app.appendChild(spanBotones);

// Resultado
const res = document.createElement('span');
res.id = 'result'

const inputRes = document.createElement('input');
inputRes.id = 'inputResult'
inputRes.readOnly = true;
inputRes.value = '0.00';

const labelRes = document.createElement('label');
labelRes.setAttribute('for', 'inputResult');
labelRes.textContent = 'Resultado:';

res.appendChild(labelRes);
res.appendChild(inputRes);
app.appendChild(res);

// Funcionalidad botones
spanBotones.addEventListener('click', (event) => {
  if (n1.value!=='' && n2.value!=='') { //validar que los input tengan numero
    let resultadoOperacion = 0;
    debugger;
    switch (event.target.textContent) {
      case '+':
        resultadoOperacion = parseFloat(n1.value) + parseFloat(n2.value);
        inputRes.value = resultadoOperacion;
        break;

      case '-':
        resultadoOperacion = parseFloat(n1.value) - parseFloat(n2.value);
        inputRes.value = resultadoOperacion;
        break;

      case 'x':
        resultadoOperacion = parseFloat(n1.value) * parseFloat(n2.value);
        inputRes.value = resultadoOperacion;
        break;

      case '%':
        if (n2.value == 0) {
          alert('No se puede dividir entre 0')
        } else {
          resultadoOperacion = parseFloat(n1.value) / parseFloat(n2.value);
          inputRes.value = resultadoOperacion;
        };
        break;
    };
  } else {
    alert('Debe rellenar los dos campos numericos para realizar la operacion')
  };

})
