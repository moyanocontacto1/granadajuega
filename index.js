const btnAnotarse = document.querySelector(".anotarse");
const btnRefrescar = document.querySelector(".refrescar");
const btnNuevoPartido = document.getElementById("btn-nuevo-partido");
const seleccionarVerPartidos = document.getElementById("btn-seleccionar-partidos");
const form = document.querySelector("form");
const btnCrearPartido = document.getElementById("crear-partido");
const btnCancelar = document.getElementById("btn-cancelar");
const pantallaHome = document.getElementById("pantalla-home");
const pantallaCrear = document.getElementById("pantalla-crear-partido");
const inputFechaHora = document.querySelector('input[type="datetime-local"]');
const precioCancha = document.getElementById("precioCancha");
const radiosTipo = document.querySelectorAll('input[name="tipo"]');
const apuntarse = document.getElementById("apuntarse");

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

inputFechaHora.min = new Date().toISOString().slice(0, 16);

form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que se recargue la página

  const nombre = form.querySelector('input[type="text"]').value.trim();
  const fechaHora = form.querySelector('input[type="datetime-local"]').value;
  const tipoFutbol = form.querySelector('input[name="tipo"]:checked');

  // 1️⃣ Validar nombre
  if (nombre === "") {
    alert("Por favor ingresá el nombre del creador.");
    return;
  }

  // 2️⃣ Validar fecha y hora
  if (!fechaHora) {
    alert("Por favor seleccioná una fecha y hora.");
    return;
  }

  const ahora = new Date();
  const fechaIngresada = new Date(fechaHora);

  if (fechaIngresada <= ahora) {
    alert("La fecha y hora deben ser posteriores al momento actual.");
    return;
  }

  // 3️⃣ Validar tipo de fútbol
  if (!tipoFutbol) {
    alert("Por favor seleccioná un tipo de fútbol.");
    return;
  }

  // ✅ Todo OK
  alert("¡Partido creado correctamente! ⚽");
  window.location.href = "index.html";

  // Opcional: volver a la pantalla home
  pantallaCrear.hidden = true;
  pantallaHome.hidden = false;

  // Opcional: resetear formulario
  form.reset();
});


/*Si confirma anot conf.   sino,  cancelada*/

btnAnotarse.addEventListener('click', () => {
  if (confirm("¿Confirmar anotación para el partido?")) {
    alert("Anotación confirmada.");
    window.location.href = "index.html";
  } else {
    alert("Anotación cancelada.");
  }
});


if (btnNuevoPartido) {
  btnNuevoPartido.addEventListener("click", () => {
   // pantallaHome.hidden = true;
    //pantallaCrear.hidden = false;
  });
}

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

