window.addEventListener('scroll', function(e) {

    // Apparition conditionnelle du footer en fonction de la hauteur de la page
    
    let footer = document.querySelector('footer')
    

    let scrollPosition = window.pageYOffset;
    const totalHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    
    
    if (scrollPosition >= (totalHeight - windowHeight)) {
        console.log("hey");
        footer.style.transform = "translateY(+100%)";


    if (scrollPosition >= (totalHeight - windowHeight)) {
        footer.style.transform = "translateY(0)";
        
    } else {
        footer.style.transform = "translateY(+100%)";

    }
})
