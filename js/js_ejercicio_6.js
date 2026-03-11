console.log('Ejercicio 6');

// Creacion contador: HH:MM:SS
    // Segundos
const seg = document.createElement('span');
seg.id = 'segundos';
seg.textContent = '00';
    // Minutos
const min = document.createElement('span');
min.id = 'minutos';
min.textContent = '00';
    // Horas
const h = document.createElement('span');
h.id = 'horas';
h.textContent = '00';
    // Separadores
const sep1 = document.createElement('p');
sep1.textContent = ':';
const sep2 = document.createElement('p');
sep2.textContent = ':';
    // Contador
const contador = document.createElement('div')
contador.id = 'contador';
    // Añadir elementos a contador
contador.appendChild(h);
contador.appendChild(sep1);
contador.appendChild(min);
contador.appendChild(sep2);
contador.appendChild(seg);
    // Añadir elementos a App
const app = document.getElementById('app');
app.appendChild(contador);

// Creacion de botones: Inicio, pausa y reinicio
const buttonContainer = document.createElement('div');
buttonContainer.id = 'buttonContainer';
    // Inicio
const inicio = document.createElement('button');
inicio.id = 'inicio';
inicio.textContent = 'Inicio';
    // Pausa
const pausa = document.createElement('button');
pausa.id = 'pausa';
pausa.textContent = 'Pausa';
    // Reinicio
const reinicio = document.createElement('button');
reinicio.id = 'reinicio';
reinicio.textContent = 'Reinicio';
    // Añadir botones al DOM
buttonContainer.appendChild(inicio);
buttonContainer.appendChild(pausa);
buttonContainer.appendChild(reinicio);
app.appendChild(buttonContainer);

// Funcion incrementar segundos
let cronometro = null;
function incrementarSegundo() {
    cronometro = setInterval(() =>{
      if (seg.textContent<59) { // subir segundos
        seg.textContent = normalizarDigitos(parseInt(seg.textContent) +1);
      } else { // Segundos = 59 --> dos casos: subir minutos | min=59 subir horas
        seg.textContent = normalizarDigitos(0);

        // Anidar if
        if (min.textContent<59) { // subir minutos
          min.textContent = normalizarDigitos(parseInt(min.textContent) +1);
        } else { // Minutos = 59 --> Subir hora y minutos a 0
          min.textContent = normalizarDigitos(0);
          h.textContent = normalizarDigitos(parseInt(h.textContent) +1);
        }
      }
    },1000)
};

// Funcion cambiar valor normalizado a dos digitos
const normalizarDigitos = (valor) => String(valor).padStart(2, '0');
// const normalizarDigitos = (valor) => ("0"+valor).slice(-2); // Otra opcion

// Evento Inicio
inicio.addEventListener('click', () => {
  inicio.disabled = true;
  incrementarSegundo();
  pausa.disabled = false
});


// Evento Pausa
pausa.addEventListener('click', () => {
  pausa.disabled = true;
  clearInterval(cronometro);
  inicio.disabled = false;
});

// Evento Renicio
reinicio.addEventListener('click', () => {
  clearInterval(cronometro); // Parar cronometro
  // Reestablecer numeros a cero
  seg.textContent = normalizarDigitos(0);
  min.textContent = normalizarDigitos(0);
  h.textContent = normalizarDigitos(0);
  inicio.disabled = false;
  pausa.disabled = false;
});
