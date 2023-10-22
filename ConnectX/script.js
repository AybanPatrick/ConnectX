const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    carouselSlides[currentSlide].style.display = 'none';
    currentSlide = (slideIndex + carouselSlides.length) % carouselSlides.length;
    carouselSlides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

// Auto-advance the carousel every 5 seconds (adjust as needed)
setInterval(nextSlide, 5000);

// Show the initial slide
showSlide(currentSlide);
