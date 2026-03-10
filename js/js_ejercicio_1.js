console.log("Ejercicio 1: Cambiador de Color de Fondo ");

function colorRGBAleatorio() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

function backgroundColorChange() {
  document.body.style.backgroundColor = colorRGBAleatorio()
  console.log("Color cambiado");
};

const boton = document.getElementById("btn");

if (boton) {
  boton.addEventListener("click", backgroundColorChange);
};
