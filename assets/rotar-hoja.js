let $hojas=document.getElementsByClassName("change");
export default function rotarHoja(btn){
      document.addEventListener("click",e=>{if(e.target.matches(btn))[...$hojas].forEach(e => e.classList.toggle("visibilidad"))})
}