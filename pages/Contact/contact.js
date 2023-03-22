const form = document.querySelector(".formulaire");
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const message = document.getElementById('message');
const alerte = document.querySelector(".alert");
const alertMessage = document.querySelector(".alertMessage");
const container = document.querySelector("container-1000");

alerte.style.visibility= "hidden";

form.onsubmit = function (event) {
if (prenom.value === '' || prenom.value == null) {
    event.preventDefault();
    alerte.style.visibility= "visible";
    alertMessage.innerHTML = "🦖 Merci d'indiquer votre prénom 🦖";
}
else if (email.value === '' || email.value == null) {
    event.preventDefault(); 
    alerte.style.visibility= "visible";
    alertMessage.innerHTML = "🦖 Merci d'indiquer votre email 🦖";
}
else if (message.value === '' || message.value == null) {
    event.preventDefault(); 
    alerte.style.visibility= "visible";
    alertMessage.innerHTML = "🦖 Merci d'indiquer votre message 🦖";
}
else {
    event.preventDefault(); 
    alerte.style.visibility= "visible";
    alertMessage.innerHTML = "🦖 Merci " + prenom.value + " pour votre message. Nous vous apporterons un retour dans les meilleurs délais. 🦖";
}
};
