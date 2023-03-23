const sliderContent = [
    {
        img: "/assets/Img/slider-img-activite.png",
        title: "Nos activités",
        url: "/pages/Activités/activités.html",
    },
    {
        img: "/assets/Img/slider-img-coachs.png",
        title: "Nos coachs",
        url: "/pages/Coach/coach.html",
    },
    {
        img: "/assets/Img/slider-img-tarifs.png",
        title: "Nos tarifs",
        url: "/pages/Tarifs/tarifs.html",
    }
]

const imgSlider = document.querySelector('.img-card')
const titleSlider = document.querySelector('#h3')
const dadCard = document.querySelector('.dad-card');

const nbSlide = sliderContent.length;

const createCard = (arr) => {
    const card = `
    <div class="card">
    <div class="img-card" style="background-image : url(${arr.img});"></div>
    <div class="wrapper-right-card">
    <div class="wrapper-text-button">
    <h3>${arr.title}</h3>
    <button><a href="${arr.url}">Voir</a></button>
    </div>
    <div class="button-next-page">
    <i class="fa-solid fa-arrow-right"></i>
    </div>
    </div>
    </div>
    `


    dadCard.innerHTML = card;
    const nextPageSlider = document.querySelector('.button-next-page')

    nextPageSlider.addEventListener("click", pageUp)
}


let countSlider = 0;


const render = () => {
    console.log(countSlider)
    createCard(sliderContent[countSlider]);
}

render();



function pageUp(e) {

    e.preventDefault();


    if (countSlider < sliderContent.length -1) {
        countSlider++
        render()

    } else {
        countSlider = 0
        render()
    }
}




