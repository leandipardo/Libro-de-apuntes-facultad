export default function maximizar() {
  document.addEventListener("click", (e) => {
    if (e.target.parentElement.id == "max") {
      document.getElementById("html-der").classList.toggle("maximize");
      document
        .getElementsByClassName("hooks")[0]
        .classList.toggle("display-none");
    }
  });
}
