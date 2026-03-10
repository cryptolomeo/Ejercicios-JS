console.log('Ejercicio 7')

const app = document.getElementById('app') ;

//  Campo entrada de datos
const input = document.createElement('input');
input.id = 'length';
input.type = 'number';
input.placeholder = 'Numero de carácteres:';
app.append(input);

//  Boton Generar Contraseña
const button = document.createElement('button');
button.textContent = 'Generar contraseña';
button.id = 'generate';
app.append(button);

//  Espacio para mostrar contraseña aleatoria
const passContainer = document.createElement('span')
passContainer.id = 'pass'
app.append(passContainer);

//  Creacion del 'p' y añadirlo al DOM
const passP = document.createElement('p');
passContainer.appendChild(passP);

//  Escuchador de evento del boton
button.addEventListener('click', () => {
  // Generar Contraseña Aleatoria con el numero de Caracteres del Input
  const numChar = parseInt(input.value);
  const passGenerated = generarPassword(numChar);
  // Añadir contraseña al 'p'
  passP.textContent = ''; // Limpieza de variable
  passP.textContent = passGenerated;



});

//
// FUNCIONES NECESARIAS//
//

/** FUNCION 1
   * Genera una contraseña aleatoria que contiene letras, numeros y caracteres especiales.
   * @param {number} numero - numero de caracteres que va a tener la contraseña aleatoria.
   * @returns {string} Contraseña aleatoria.
   */
  function generarPassword(numero) {
    let password = '';

    if (Number.isInteger(numero) && numero >= 4){
      const numeros = "0123456789";
      const carEspeciales = "#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; // Sin espacio para evitar confusion
      const letras = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
      const arr = [letras, letras, numeros, carEspeciales];
      let countArr = 0;

      for (let i=0; i<numero; i++) {
        if (countArr==4) {
          countArr = 0;
        };
        let rand = arr[countArr][Math.floor(Math.random()*(arr[countArr].length))];
        countArr++;
        password += rand;
      }

    } else {
      alert('Introduce un numero entero mayor o igual a 4 para crear la contraseña');
    }
    return shuffle(password);
  };


  /** FUNCION 2
   * Algoritmo fisher-Yates para mezclar aleatoriamenteun string
   * @param {string} password - Contraseña en formato string que va a ser barajeada aleatoriamente
   * @returns {string} Contraseña barajeada
   */
  function shuffle(password) {
    let arr = password.split('');
    for (let i=0; i<arr.length-1; i++) {
      // Indice aleatorio entre i y la longitud maxima del array menos 1
      let j = Math.floor(Math.random() * (arr.length-i))+i; // El -i es para que simpre exista el indice

      let arrI = arr[i];  // Guarda elemento derecha con indice(i)
      let arrJ = arr[j];  // Guarda elemento izda con indice(j)
      // Permuta de elementos
      arr[i] = arrJ;  // Añade elemento j en la posicion (i)
      arr[j] = arrI; // Añade elemento i a la posicion (j)
    }
    return arr.join('');
  };
