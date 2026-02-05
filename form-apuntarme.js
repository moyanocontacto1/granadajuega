const form = document.querySelector(".contenedor-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que recargue la página

  confirm("Registro exitoso. Quieres ver los detalles?");

  window.location.href = "ver-partidos.html";
});