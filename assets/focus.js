const $book = document.querySelector(".booklet"),
$main = document.querySelector("main");
export default function focus() {
  $book.addEventListener("mouseenter", e => {
    $main.style.backdropFilter = "blur(100px)";
    $main.style.background = "rgba(0, 0, 0, 0.377)";
  });
  $book.addEventListener("mouseleave", e => {
        $main.style.backdropFilter = "blur(0px)";
        $main.style.background = "none";
    });
}