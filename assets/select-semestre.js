const semestreContainer = document.getElementById("semestre-conteiner"),
  ingreso = document.getElementById("semestre-ingreso"),
  primerSemestre = document.getElementById("semestre-coc-cadp-mat1"),
  segundoSemestre = document.getElementById("semestre-arqu-tdc-mat2"),
  marcadores = document.getElementsByClassName("mark");
export default function seleccionarSemestre() {
  semestreContainer.addEventListener("click", (e) => {
    if (e.target === ingreso) {
      marcadores[0].id = "coc";
      marcadores[0].children[0].textContent = "COC";
      marcadores[1].id = "epa";
      marcadores[1].children[0].textContent = "EPA";
      marcadores[2].id = "mat";
      marcadores[2].children[0].textContent = "MAT";
    }
    if (e.target === primerSemestre) {
      marcadores[0].children[0].textContent = "OC";
      marcadores[0].id = "oc";
      marcadores[1].children[0].textContent = "CADP";
      marcadores[1].id = "cadp";
      marcadores[2].children[0].textContent = "MAT1";
      marcadores[2].id = "matUno";
    }
    if (e.target === segundoSemestre) {
      marcadores[0].children[0].textContent = "ARQ";
      marcadores[0].id = "arq";
      marcadores[1].children[0].textContent = "TDC";
      marcadores[1].id = "tdc";
      marcadores[2].children[0].textContent = "MAT2";
      marcadores[2].id = "matDos";
    }
  });
}
