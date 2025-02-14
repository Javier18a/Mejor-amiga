
const texts = document.querySelectorAll('.text');
let currentIndex = 0;

function showNextText() {
    texts[currentIndex].classList.remove('show');
    currentIndex = (currentIndex + 1) % texts.length;
    texts[currentIndex].classList.add('show');
}

setInterval(showNextText, 3000);


const images = document.querySelectorAll('.image');
let currentImageIndex = 0;

function showNextImage() {
    images[currentImageIndex].classList.remove('show');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('show');
}

setInterval(showNextImage, 3000);