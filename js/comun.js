document.addEventListener("DOMContentLoaded", () => {

  const boton = document.createElement("button");
  boton.className = "btn-inicio";
  boton.textContent = "⬅ Inicio";

  boton.addEventListener("click", () => {
    if (history.length > 1) {
      history.back();
    } else {
      window.location.href = "/educando/";
    }
  });

  document.body.appendChild(boton);

});
