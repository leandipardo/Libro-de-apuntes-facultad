import cursorStyles from "./cursor.js";
import fetchStart from "./fetch-html.js";
import focus from "./focus.js";
import rotarHoja from "./rotar-hoja.js";
import seleccionarSemestre from "./select-semestre.js";

document.addEventListener("DOMContentLoaded", (e) => {
  fetchStart();
  focus();
  rotarHoja("#booklet-rotate");
  seleccionarSemestre();
  cursorStyles();
});
