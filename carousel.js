let currentSlide = 0; 
const slides = document.querySelectorAll('.carousel .item'); 
const totalSlides = slides.length;

function showSlide() {
    slides.forEach(slide => slide.style.display = 'none'); 
    slides[currentSlide].style.display = 'block'; 
}

function updateSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; 
    showSlide();
}

setInterval(updateSlide, 5000); 

showSlide();