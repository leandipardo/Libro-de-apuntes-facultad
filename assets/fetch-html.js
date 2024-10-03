const $sheet = document.getElementById("html-der"),
  $markerCoc = document.getElementById("coc"),
  $markerMath = document.getElementById("mat"),
  $markerEpa = document.getElementById("epa"),
  $number = document.getElementById("nhoja");
let hojas = 0,
  materia = "inicio",
  numPdf = 0,
  i = 0;
getData(i, "left");
export default function fetchStart() {
  document.addEventListener("click", (e) => {
    if (
      e.target.matches("#semestre-conteiner") ||
      e.target.matches("#semestre-conteiner button")
    ) {
      i = 0;
      numPdf = 0;
      materia = "inicio";
      hojas = 0;
      getData(i, "left");
    }
    if (e.target.matches("#coc") || e.target.matches("#coc p")) {
      i = 0;
      numPdf = 2;
      materia = "coc";
      marker($markerCoc);
      hojas = 5;
      getData(i, "left");
    }
    if (e.target.matches("#epa") || e.target.matches("#epa p")) {
      numPdf = 1;
      i = 0;
      materia = "epa";
      marker($markerEpa);
      hojas = 5;
      getData(i, "left");
    }
    if (e.target.matches("#mat") || e.target.matches("#mat p")) {
      numPdf = 2;
      i = 0;
      materia = "mat";
      marker($markerMath);
      hojas = 5;
      getData(i, "left");
    }
    if (e.target.matches("#oc") || e.target.matches("#oc p")) {
      i = 0;
      numPdf = 2;
      materia = "oc";
      let $markerOc = document.getElementById("oc");
      marker($markerOc);
      hojas = 5;
      getData(i, "left");
    }
    if (e.target.matches("#matUno") || e.target.matches("#matUno p")) {
      i = 0;
      numPdf = 2;
      materia = "mat1";
      let $markerMatUno = document.getElementById("matUno");
      marker($markerMatUno);
      hojas = 5;
      getData(i, "left");
    }
    if (e.target.matches("#cadp") || e.target.matches("#cadp p")) {
      i = 0;
      numPdf = 2;
      materia = "cadp";
      let $markerCadp = document.getElementById("cadp");
      marker($markerCadp);
      hojas = 5;
      getData(i, "left");
    }
    if (e.target.matches("#arq") || e.target.matches("#arq p")) {
      i = 0;
      numPdf = 2;
      materia = "arq";
      let $markerArq = document.getElementById("arq");
      marker($markerArq);
      hojas = 15;
      getData(i, "left");
    }
    if (e.target.matches("#tdc") || e.target.matches("#tdc p")) {
      i = 0;
      numPdf = 2;
      materia = "tdc";
      let $markerTdc = document.getElementById("tdc");
      marker($markerTdc);
      hojas = 5;
      getData(i, "left");
    }
    if (e.target.matches("#matDos") || e.target.matches("#matDos p")) {
      i = 0;
      numPdf = 2;
      materia = "mat2";
      let $markerMatDos = document.getElementById("matDos");
      marker($markerMatDos);
      hojas = 5;
      getData(i, "left");
    }
    if (e.target.matches("#left-arrow")) {
      if (i < hojas || i === 0) i++;
      getData(i, "left");
    } else if (e.target.matches("#right-arrow")) {
      if (i > 0) i--;
      getData(i, "right");
    }
    if (
      e.target.matches("#fotocopias" || e.target.matches("#fotocopias img"))
    ) {
      abrirPDFs();
    }
  });
}
function marker(elem) {
  $markerCoc.style.transform = "translateY(0)";
  $markerEpa.style.transform = "translateY(0)";
  $markerMath.style.transform = "translateY(0)";
  elem.style.transform = "translateY(-40%)";
}
async function getData(num, dir) {
  try {
    let response = await fetch(`/Hojas/${materia}/${num}.html`);
    if (!response.ok)
      throw new Error(
        `Error en la solicitud: ${response.status} ${response.statusText}`
      );
    const htmlContent = await response.text();
    await printData(htmlContent, dir);
  } catch (err) {
    console.log(err);
    $sheet.innerHTML = `<h1 style=";background-color:white;color:black;text-align:center;font-size:3em;width:100%;">Nada por aquí...</h1>
                  <div style="width:100%;height:60%;display:flex;justify-content:center;align-items:center;box-shadow:none;">
                  <img style="box-shadow:none;background-color:white;" src="/assets/img/steven-seagal-what.gif" alt="Seteven seagal perdido">
                  </div>`;
  }
}
async function printData(text, dir) {
  $sheet.innerHTML = text;
  $number.innerHTML = i;
  timeGo(dir);
}
function timeGo(direction) {
  $sheet.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    if (i < hojas) {
      direction === "left"
        ? $sheet.classList.add("rotate-sheet")
        : $sheet.classList.add("rotate-sheet-back");
      $number.style.opacity = "1";
    }
    setTimeout(() => {
      $sheet.classList.remove("rotate-sheet");
      $sheet.classList.remove("rotate-sheet-back");
    }, 350);
    setTimeout(() => {
      $number.style.opacity = ".5";
    }, 1000);
  }, 5);
}
export function abrirPDFs() {
  window.open(`/assets/pdf/guia_${materia}.pdf`, "_blank");
  if (numPdf === 2)
    window.open(`/assets/pdf/ejercicios_${materia}.pdf`, "_blank");
}
