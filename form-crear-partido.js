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

inputFechaHora.min = new Date().toISOString().slice(0, 16);

form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que se recargue la página

  const nombre = form.querySelector('input[type="text"]').value.trim();
  const fechaHora = form.querySelector('input[type="datetime-local"]').value;
  const tipoFutbol = form.querySelector('input[name="tipo"]:checked');

  // 1 Validar nombre
  if (nombre === "") {
    alert("Por favor ingresá el nombre del creador.");
    return;
  }

  // 2 Validar fecha y hora
  if (!fechaHora) {
    alert("Por favor seleccioná una fecha y hora.");
    return;
  }

  // 2.2 validar Celular 
  if (!) {
    alert("Por favor seleccioná una fecha y hora.");
    return;
  }

  const ahora = new Date();
  const fechaIngresada = new Date(fechaHora);

  if (fechaIngresada <= ahora) {
    alert("La fecha y hora deben ser posteriores al momento actual.");
    return;
  }

  // 3 Validar tipo de fútbol
  if (!tipoFutbol) {
    alert("Por favor seleccioná un tipo de fútbol.");
    return;
  }

  // ✅ Todo OK
  confirm("¡Lo has creado correctamente⚽! ¿Quieres ver tu partido creado en la seccion ver partidos disponibles?");
  window.location.href = "ver-partidos.html";

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

document.getElementById('crear-partido').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // 1. Capturar los datos
    const nuevoPartido = {
        fecha: document.getElementById('fecha').value,
        hora: document.getElementById('hora').value,
        ubicacion: document.getElementById('ubicacion').value,
        jugadores: "1 / 14",
        estado: "Activo"
    };

    // 2. Guardar en LocalStorage
    // Obtenemos los partidos que ya existan o creamos un array vacío
    let partidos = JSON.parse(localStorage.getItem('misPartidos')) || [];
    partidos.push(nuevoPartido);
    localStorage.setItem('misPartidos', JSON.stringify(partidos));

    // 3. Alerta y Redirección
    alert("¡Partido creado correctamente!\nTu partido creado se verá en el menú principal.");
    
    // 4. Enviar al index
    window.location.href = "index.html"; 
});