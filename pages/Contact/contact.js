const form = document.querySelector(".formulaire");
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const message = document.getElementById('message');
const alerte = document.querySelector(".alert");
const alertMessage = document.querySelector(".alertMessage");
const blur = document.querySelector(".blur");
const closebtn = document.querySelector(".closebtn");

alerte.style.visibility= "hidden";

form.onsubmit = function (event) {
if (prenom.value === '' || prenom.value == null) {
    event.preventDefault();
    blur.style.filter= "blur(10px)";
    alerte.style.visibility= "visible";
    alertMessage.innerHTML = "🦖 Merci d'indiquer votre prénom 🦖";
}
else if (email.value === '' || email.value == null) {
    event.preventDefault(); 
    blur.style.filter= "blur(10px)";
    alerte.style.visibility= "visible";
    alertMessage.innerHTML = "🦖 Merci d'indiquer votre email 🦖";
}
else if (message.value === '' || message.value == null) {
    event.preventDefault(); 
    blur.style.filter= "blur(10px)";
    alerte.style.visibility= "visible";
    alertMessage.innerHTML = "🦖 Merci d'indiquer votre message 🦖";
}
else {
    event.preventDefault(); 
    blur.style.filter= "blur(10px)";
    alerte.style.visibility= "visible";
    alertMessage.innerHTML = "🦖 Merci " + prenom.value + " pour votre message. Nous vous apporterons un retour dans les meilleurs délais. 🦖";
}
};

closebtn.onclick = function () {
    blur.style.filter= "blur(0)";
    alerte.style.visibility= "hidden";
};

