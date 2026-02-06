
const btnNuevoPartido = document.getElementById("btn-nuevo-partido");
const form = document.querySelector("form");
const btnCrearPartido = document.getElementById("crear-partido");
const btnCancelar = document.getElementById("btn-cancelar");
const pantallaHome = document.getElementById("pantalla-home");
const pantallaCrear = document.getElementById("pantalla-crear-partido");


/*CALCULAR PRECIO LO VOY A IMPLEMENTAR MAS ADELANTE.
const precios = {
  7: 50,
  8: 60,
  11: 80
};

radiosTipo.forEach(radio => {
  radio.addEventListener("change", () => {
    const tipoSeleccionado = radio.value;
    const precio = precios[tipoSeleccionado];

    precioCancha.innerHTML = `
      <strong>Precio de la cancha:</strong> €${precio.toLocaleString("es-ES")}
    `;
  });
});
*/


const formCrear = document.getElementById("form-crear-partido");

formCrear.addEventListener("submit", function(e) {
  e.preventDefault(); // Evita que la página se recargue

  // 1️⃣ Capturar los datos
  const nombre = formCrear.querySelector('input[placeholder="Organizador"]').value.trim();
  const fechaHora = formCrear.querySelector('input[type="datetime-local"]').value;
  const ubicacion = formCrear.querySelector('input[placeholder^="Ej"]').value.trim();
  const tipoFutbol = formCrear.querySelector('input[name="tipo"]:checked');

  if (!nombre || !fechaHora || !ubicacion || !tipoFutbol) {
    alert("Por favor completá todos los campos obligatorios.");
    return;
  }

  // 2️⃣ Guardar partido en localStorage
  const nuevoPartido = {
    nombre,
    fechaHora,
    ubicacion,
    tipoFutbol: tipoFutbol.value,
    jugadores: "1 / 14",
    estado: "Activo"
  };

  let partidos = JSON.parse(localStorage.getItem('misPartidos')) || [];
  partidos.push(nuevoPartido);
  localStorage.setItem('misPartidos', JSON.stringify(partidos));

  // 3️⃣ MOSTRAR TOAST
  const mensaje = document.getElementById("mensaje-exito");
  mensaje.classList.remove("hidden");
  setTimeout(() => mensaje.classList.add("show"), 50);

  // Ocultar después de 3 segundos
  setTimeout(() => {
    mensaje.classList.remove("show");
    setTimeout(() => mensaje.classList.add("hidden"), 500);
  }, 3000);

  // 4️⃣ Resetear form y redirigir
  setTimeout(() => {
    formCrear.reset();
    window.location.href = "ver-partidos.html";
  }, 3500);
});



btnCancelar.addEventListener("click", () => {
   window.location.href = "index.html";
});

if (btnAnotarse) {
  btnAnotarse.addEventListener("click", () => {
    if (confirm("¿Confirmar anotación para el partido?")) {
      alert("Anotación confirmada.");
    } else {
      alert("Anotación cancelada.");
    }
  });
}
