let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("arena");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex -1].style.display = "block";
    setTimeout(showSlides, 6000);
}











/*

   window.onload = function (){
let image = document.getElementById('t-arena')
let images = ['img/football-training.jpg', 'img/football-arena.jpg']
let index = 0;
const interval = 8000;
function slide() {
    image.src = images[index++%images.length]
}
setInterval(slide, interval);
}
*/


/*
setInterval(function (){
    let random = Math.floor(Math.random() * 2)
    image.src = images[random];
}, 3000);
*/
