const form = document.querySelector(".formulaire");
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const message = document.getElementById('message');


form.onsubmit = function (event) {
if (prenom.value === '' || prenom.value == null) {
    event.preventDefault();
    alert("🦖 Merci d'indiquer votre prénom 🦖")
}
else if (email.value === '' || email.value == null) {
    event.preventDefault();
    alert("🦖 Merci d'indiquer votre email 🦖")
}
else if (message.value === '' || message.value == null) {
    event.preventDefault();
    alert("🦖 Merci d'indiquer votre message 🦖")
}
else {
    event.preventDefault();
    alert("🦖 Merci " + prenom.value + " pour votre message. Nous vous apporterons un retour dans les meilleurs délais. 🦖");
}
};
