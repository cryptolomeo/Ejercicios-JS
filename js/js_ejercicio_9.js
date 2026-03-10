console.log('Ejercicio 9');

const app = document.getElementById('app');

// 1.-Crear Fieldset contenedor de tareas
//      Fielset
const fieldset = document.createElement('fieldset');
fieldset.id = 'ToDoList'

//      Titulo
const legend = document.createElement('legend');
legend.textContent = '📝​ Lista de tareas'

//      Lista
const list = document.createElement('ul');
list.id = 'tasks';

//      Montar fieldset
fieldset.appendChild(legend);
fieldset.appendChild(list);
app.appendChild(fieldset);

// 2.-Input para añadir tarea
const input = document.createElement('input');
input.id = 'addTask';
input.placeholder = 'Escribe la tarea aquí ...';
app.appendChild(input);

// 3.-Boton añadir tarea
const button = document.createElement('button');
button.id = 'add';
button.textContent = 'Añadir';
app.appendChild(button);

// 4.-Boton limpieza de tares completas
const clean = document.createElement('button');
clean.id = 'clean';
clean.textContent = 'Limpiar completadas';
app.appendChild(clean);

// 5.-Definir estructura de datos para renderizar las tareas y guardarlas en LocalStorage
let tareas = []; // Array de objetos
// Ejemplo = [{tarea: 'Hacer la compra', completada: true}, {tarea: 'Revisar presión neumáticos', completada:true}]

// 6.-Si hay datos en LocalStorage cargarlos
if (localStorage.getItem('lista')) {
  tareas = cargarDeLocalStorage();
  renderizarTareas(tareas);
};

// 7.-Escuchador de Evento agregar tarea
button.addEventListener('click', () => {
  //      Validar input vacio
  if (input.value.trim() === '') {
    input.value = '';
    return;
  };
  //      Guardar tarea en array de objetos
  tareas.push({ tarea: input.value, completada: false });
  input.value = '';   // Borrar entrada de tareas
  //      Llama a guardarEnLocalStorage()
  guardarEnLocalStorage(tareas);
  //      Llama a renderizarTareas()
  renderizarTareas(tareas);
});

// 8.-Escuchador de Evento Boton limpiar tareas completadas
clean.addEventListener('click', () => {
  tareas = tareas.filter(e => e.completada == false);
  //      Guardar en LocalStorage
  guardarEnLocalStorage(tareas);
  //      Renderizar Tareas
  renderizarTareas(tareas);
});

// FUNCIONES
// 1.-Renderizar tareas
/**
 * Función que crea y pinta la lista de tareas en el DOM.
 * @param {array} arrayObj
 * Estructura de datos: array de objetos
 * Ejemplo --> [{tarea: 'Hacer la compra', completada: true}, {tarea: 'Revisar presión neumáticos', completada:true}]
 */
function renderizarTareas(arrayObj) {
  //      Borra lista existente
  list.innerHTML = ''

  //      Crea la lista desde los datos del array
  arrayObj.forEach((e, indice) => {

    //      Tarea
    const text = document.createElement('span');
    text.textContent = e.tarea;

    //      Checkbox con escuchador de eventos
    const checkbox = document.createElement('input');
    checkbox.className = 'check';
    checkbox.type = 'checkbox';
    checkbox.checked = e.completada;
    checkbox.dataset.index = indice;

    //      EventListener que detecte check
    checkbox.addEventListener('change', (event) => {
      let i = event.target.dataset.index;
      //      Actualizar array
      if (checkbox.checked) {
        tareas[i]['completada'] = true;
      } else {
        tareas[i]['completada'] = false;
      }

      //      Llame a guardarEnLocalStorage()
      guardarEnLocalStorage(tareas);
    });

    //      Contenedor li
    const newLi = document.createElement('li');
    newLi.appendChild(checkbox);
    newLi.appendChild(text);

    //      Añadir tarea
    list.appendChild(newLi);
  });
};

// 2.-Guardar en LocalStorage
/**
 * Guarda estructura de datos en LocalStorage
 * @param {array} arrayObj
 * Estructura de datos: array de objetos
 */
function guardarEnLocalStorage(arrayObj) {
  localStorage.setItem('lista', JSON.stringify(arrayObj));
};

// 3.-Cargar de LocalStorage
/**
 * Devuelve array de objetos guardados en el navegador
 * @returns
 */
function cargarDeLocalStorage() {
  let arrayObj = JSON.parse(localStorage.getItem('lista'));
  return arrayObj;
};
