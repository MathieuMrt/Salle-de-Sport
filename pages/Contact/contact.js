const form = document.querySelector(".formulaire");

form.onsubmit = function (event) {
    event.preventDefault();
    alert("Merci pour votre message. Nous vous apporterons un retour dans les meilleurs délais.");
};