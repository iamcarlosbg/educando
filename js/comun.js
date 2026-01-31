document.addEventListener("DOMContentLoaded", () => {

  // Crear botón
  const boton = document.createElement("button");
  boton.className = "btn-inicio";
  boton.textContent = "⬅ Inicio";

  // Acción del botón
  boton.addEventListener("click", () => {
    if (history.length > 1) {
      history.back();
    } else {
      window.location.href = "../index.html";
    }
  });

  // Añadir al body
  document.body.appendChild(boton);

});
