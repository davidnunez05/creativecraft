let currentSlide = 0;
let slideInterval;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const offset = -currentSlide * 300;
    slides.style.transform = `translateX(${offset}px)`;
}

function startSlider() {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 3000); // Change slide every 3 seconds
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Start the slider when the page loads
window.onload = startSlider;

// Stop the slider when the mouse is over it and start again when the mouse leaves
const slider = document.querySelector('.slider');
slider.addEventListener('mouseover', stopSlider);
slider.addEventListener('mouseout', startSlider);
