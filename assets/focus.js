const $book = document.querySelector(".booklet"),
contenedor = document.getElementById('html-der'); // Reemplaza 'tuContenedor' con el ID de tu contenedor
export default function focus() {
  contenedor.addEventListener("mouseenter", e => {
    if (e.target.classList.contains("html-style")) {
      $book.style.backdropFilter = "blur(100px)";
      $book.style.background = "rgba(0, 0, 0, 0.377)";
    }
  });
  contenedor.addEventListener("mouseleave", e => {
      if (e.target.classList.contains("html-style") || e.target.classList.contains("blur")) {
        $book.style.backdropFilter = "blur(0px)";
        $book.style.background = "none";
      }
    });
}