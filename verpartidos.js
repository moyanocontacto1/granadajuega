const RefrescarBtn = document.querySelector(".refrescar");
const apuntarseBtn = document.getElementById("apuntarse");
const anotadosBtn = document.querySelector(".anotados");
const ubicacion = document.querySelector(".ubi");

// --- LÓGICA PARA ABRIR Y CERRAR ---
const modal = document.getElementById("miModal");
const btnAbrir = document.getElementById("openModal");
const btnCerrarX = document.querySelector(".close-btn");
const btnEntendido = document.getElementById("btnEntendido");

// Abrir modal
btnAbrir.onclick = function() {
  modal.style.display = "block";
}

// Cerrar con la X
btnCerrarX.onclick = function() {
  modal.style.display = "none";
}

// Cerrar con el botón "Cerrar"
btnEntendido.onclick = function() {
  modal.style.display = "none";
}

// Cerrar si hacen clic fuera de la caja blanca
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



/*   ESTO ES PARA CUANDO TOCAN APUNTATE Y llenan el formulario y SALE LA CONFIRMACION 
btnApuntarse.addEventListener('click', () => {
  if (confirm("¿Confirmar anotación para el partido?")) {
    alert("Anotación confirmada.");
    window.location.href = "index.html";
  } else {
    alert("Anotación cancelada.");
  }
});
*/