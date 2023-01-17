"use strict";
const $form = document.getElementById("form");
const $legend = document.getElementsByTagName("legend")[0];
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const permitido = {
  username: "bit",
  password: 2023,
  accept: true,
};

const alert = (menssage, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert"`,
    `   <div>${menssage}</div>`,
    '   <button class="btn-close" type="submit"></button>',
    " </div>",
  ].join("");
};

function esValidoForm() {
  if (permitido.username && permitido.password && permitido.accept) {
    return true;
  } else {
    return false;
  }
}

function checkPermitido() {
  $form.username.addEventListener("input", (e) => {
    permitido.username = e.target.value;
  });
  $form.password.addEventListener("input", (e) => {
    permitido.password = e.target.value;
  });
  $form.accept.addEventListener("click", (e) => {
    permitido.accept = e.target.value;
  });

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (esValidoForm() === true) {
      window.location.href =
        "https://wenaleja.github.io/bit06exercises/exercises.html";
    } else {
      $legend.classList.add("text-danger");
      alert("todos los campos son obligatorios", "danger");
    }
  });
}
checkPermitido();
/*
  if (
    obj.username === permitido.username &&
    parseInt(obj.password) === permitido.password &&
    obj.accept === permitido.accept
  ) {
    alert("hola");
    
  } else {
    alert("Acceso Denegado, el usuario no es permitido", "warning");
  } */
