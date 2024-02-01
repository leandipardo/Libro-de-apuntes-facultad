const $sheet= document.getElementById("html-der"),
$markerCoc=document.getElementById("coc"),
$markerMath=document.getElementById("mat"),
$markerEpa=document.getElementById("epa"),
$number=document.getElementById("nhoja");
let hojas = 2,
materia="coc",
i = 0;
export default function fetchStart(){
            document.addEventListener("click",e=>{
                  if(e.target.matches("#coc")||e.target.matches("#coc p")){
                        i = 0;
                        console.log($number)
                        materia="coc"
                        marker($markerCoc);
                        hojas=5
                        getData(i,"left")
                  }
                  if(e.target.matches("#epa")||e.target.matches("#epa p")){
                        i = 0;
                        materia="epa"
                        marker($markerEpa);
                        hojas=5
                        getData(i,"left")
                  }
                  if(e.target.matches("#mat")||e.target.matches("#mat p")){
                        i = 0;
                        materia="mat"
                        marker($markerMath);
                        hojas=5
                        getData(i,"left")
                  }
                  if(e.target.matches("#left-arrow")){
                        if(i < hojas || i === 0)i++;
                        getData(i,"left");
                  }else if (e.target.matches("#right-arrow")){
                        if(i>0)i--;
                        getData(i,"right");
                  }
            })
}
function marker(elem){
      console.log($markerCoc.style + "    " + elem);
      $markerCoc.style.transform="translateY(0)";
      $markerEpa.style.transform= "translateY(0)";
      $markerMath.style.transform= "translateY(0)";
      elem.style.transform="translateY(-50%)";

}
async function getData(num,dir){
                  try {
                      let response = await fetch(`/Hojas/${materia}_${num}.html`);
                      if(!response.ok)throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
                      const htmlContent = await response.text();
                      await printData(htmlContent,dir)
                 } catch (err) {
                  console.log(err);
                  $sheet.innerHTML=`
                  <h1 style=";background-color:white;text-align:center;font-size:3em;width:100%;">ALTO BUGENCIO</h1>
                  <div style="width:100%;height:60%;display:flex;justify-content:center;align-items:center;">
                        <img style="width:80%;height:60%;" src="/assets/img/error.png" alt="err">
                  <div>`;
                 }
              }
async function printData(text,dir){
                  $sheet.innerHTML =text;
                  $number.innerHTML= i;
                  timeGo(dir);
              }
function timeGo(direction){
                  setTimeout(() => {
                        if (i < hojas){
                        (direction === "left") ? $sheet.classList.add("rotate-sheet") :$sheet.classList.add("rotate-sheet-back");
                        $number.style.opacity="1";
                  }
                        setTimeout(() => {
                              $sheet.classList.remove("rotate-sheet");
                              $sheet.classList.remove("rotate-sheet-back");   
                        }, 350);
                        setTimeout(() => {
                              $number.style.opacity=".5";
                        }, 1000);
                  }, 5);
            }