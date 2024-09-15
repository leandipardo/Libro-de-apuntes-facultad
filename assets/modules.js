import fetchStart from "./fetch-html.js";
import focus from "./focus.js";
import rotarHoja from "./rotar-hoja.js";
import seleccionarSemestre from "./select-semestre.js";

document.addEventListener("DOMContentLoaded", (e) => {
  fetchStart();
  focus();
  rotarHoja("#booklet-rotate");
  seleccionarSemestre();
});
// Selecciona el elemento del cursor
const cursor = document.getElementById("customCursor");

// Función para mover el cursor con el ratón
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
