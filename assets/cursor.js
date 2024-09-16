const cursor = document.getElementById("customCursor"),
  pointer = document.querySelectorAll("[pointer]"),
  hoja = document.getElementById("html-der");

export default function cursorStyles() {
  // Selecciona el elemento del cursor
  // Función para mover el cursor con el ratón
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  //animacion de salida y entrada ventana
  document.addEventListener("mouseleave", (e) => {
    cursor.classList.add("custom-cursor-dissapear");
  });
  document.addEventListener("mouseenter", (e) => {
    cursor.classList.remove("custom-cursor-dissapear");
  });

  //animacion de pointer
  pointer.forEach((e) => {
    e.addEventListener("mouseenter", (e) => {
      cursor.classList.add("pointer-animation");
    });
    e.addEventListener("mouseleave", (e) => {
      cursor.classList.remove("pointer-animation");
    });
  });
  hoja.addEventListener("mouseenter", (e) => {
    console.log("2");
    cursor.classList.add("pointer-hoja");
  });
  hoja.addEventListener("mouseleave", (e) => {
    cursor.classList.remove("pointer-hoja");
    console.log("3");
  });
}
