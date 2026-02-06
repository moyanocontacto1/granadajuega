// Seleccionamos el contenedor
const listaPartidos = document.getElementById("lista-partidos");

// Obtenemos los partidos desde localStorage
let partidos = JSON.parse(localStorage.getItem("misPartidos")) || [];

// Limpiamos el contenedor
listaPartidos.innerHTML = "";

// Si no hay partidos
if (partidos.length === 0) {
  listaPartidos.innerHTML = "<p>No hay partidos disponibles por el momento.</p>";
}

// Recorremos cada partido
partidos.forEach((partido, index) => {
  const div = document.createElement("div");
  div.classList.add("card-partido");

  const h3 = document.createElement("h3");
  h3.innerHTML = `<strong>Organizador:</strong> ${partido.nombre} ⚽`;
  div.appendChild(h3);

  const fechaP = document.createElement("p");
  fechaP.innerHTML = `<strong>Fecha y hora:</strong> ${new Date(partido.fechaHora).toLocaleString()}`;
  div.appendChild(fechaP);

  const ubicacionP = document.createElement("p");
  ubicacionP.innerHTML = `<strong>Ubicación:</strong> ${partido.ubicacion}`;
  div.appendChild(ubicacionP);

  const tipoP = document.createElement("p");
  tipoP.innerHTML = `<strong>Tipo de fútbol:</strong> ${partido.tipoFutbol}`;
  div.appendChild(tipoP);

  const jugadoresP = document.createElement("p");
  jugadoresP.innerHTML = `<strong>Jugadores:</strong> ${partido.jugadores}`;
  div.appendChild(jugadoresP);

  const estadoP = document.createElement("p");
  estadoP.innerHTML = `<strong>Estado:</strong> ${partido.estado}`;
  div.appendChild(estadoP);

  const boton = document.createElement("button");
  boton.classList.add("anotarse");
  boton.dataset.index = index;
  boton.textContent = "Apuntarse";
  div.appendChild(boton);

  listaPartidos.appendChild(div);
});

// Funcionalidad botones "Apuntarse"
document.querySelectorAll(".anotarse").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const i = e.target.dataset.index;
    let [actual, total] = partidos[i].jugadores.split(" / ").map(Number);

    if (actual < total) {
      actual++;
      partidos[i].jugadores = `${actual} / ${total}`;
      localStorage.setItem("misPartidos", JSON.stringify(partidos));
      e.target.parentElement.querySelector("p:nth-of-type(4)").innerHTML = `<strong>Jugadores:</strong> ${partidos[i].jugadores}`;
      alert(`Te anotaste en el partido de ${partidos[i].nombre}`);
    } else {
      alert("El partido ya está completo.");
    }
  });
});
