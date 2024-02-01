const $sheet= document.getElementById("html-der"),
const numeros = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez","once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve", "veinte","veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve", "treinta","treinta_y_uno", "treinta_y_dos", "treinta_y_tres", "treinta_y_cuatro", "treinta_y_cinco", "treinta_y_seis", "treinta_y_siete", "treinta_y_ocho", "treinta_y_nueve", "cuarenta","cuarenta_y_uno", "cuarenta_y_dos", "cuarenta_y_tres", "cuarenta_y_cuatro", "cuarenta_y_cinco", "cuarenta_y_seis", "cuarenta_y_siete", "cuarenta_y_ocho", "cuarenta_y_nueve", "cincuenta","cincuenta_y_uno", "cincuenta_y_dos", "cincuenta_y_tres", "cincuenta_y_cuatro", "cincuenta_y_cinco", "cincuenta_y_seis", "cincuenta_y_siete", "cincuenta_y_ocho", "cincuenta_y_nueve", "sesenta","sesenta_y_uno", "sesenta_y_dos", "sesenta_y_tres", "sesenta_y_cuatro", "sesenta_y_cinco", "sesenta_y_seis", "sesenta_y_siete", "sesenta_y_ocho", "sesenta_y_nueve", "setenta","setenta_y_uno", "setenta_y_dos", "setenta_y_tres", "setenta_y_cuatro", "setenta_y_cinco", "setenta_y_seis", "setenta_y_siete", "setenta_y_ocho", "setenta_y_nueve", "ochenta","ochenta_y_uno", "ochenta_y_dos", "ochenta_y_tres", "ochenta_y_cuatro", "ochenta_y_cinco", "ochenta_y_seis", "ochenta_y_siete", "ochenta_y_ocho", "ochenta_y_nueve", "noventa","noventa_y_uno", "noventa_y_dos", "noventa_y_tres", "noventa_y_cuatro", "noventa_y_cinco", "noventa_y_seis", "noventa_y_siete", "noventa_y_ocho", "noventa_y_nueve", "cien"];    
let i = -1;
export default function fetchStart(){
            document.addEventListener("click",e=>{
                  if(e.target.matches("#left-arrow")){
                        if(i< pages.length - 1)i++;
                        getData(numeros[i],"left");
                  }else if (e.target.matches("#right-arrow")){
                        if(i>0)i--;
                        getData(pages[i],"right");
                  }
            })
}
async function getData(num,dir){
                  try {
                      const response = await fetch(`/Hojas/${materia}_${num}.html`);
                      if(!response.ok)throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
                      const htmlContent = await response.text();
                      await printData(htmlContent,dir)
                 } catch (err) {
                  console.log(err)
                 }
              }
async function printData(text,dir){
                  console.log(text)
                  $sheet.innerHTML =text;
                  timeGo(dir);
              }
function timeGo(direction){
                  (direction === "left") ? $sheet.classList.add("rotate-sheet") :$sheet.classList.add("rotate-sheet-back");
                  setTimeout(() => {
                        $sheet.classList.remove("rotate-sheet");
                        $sheet.classList.remove("rotate-sheet-back");
                  }, 350);
            }