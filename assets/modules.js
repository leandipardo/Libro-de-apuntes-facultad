import fetchStart from "./fetch-html.js";
import focus from "./focus.js";
import rotarHoja from "./rotar-hoja.js";

document.addEventListener("DOMContentLoaded",e=>{
      fetchStart();
      focus();
      rotarHoja("#booklet-rotate");
})
