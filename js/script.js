const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;
const slideCount = slides.length;

function updateCarousel() {
  // Apply a smooth translation in the X-axis for the carousel
  carousel.style.transition = 'transform 1.75s ease-in-out';
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentIndex) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  updateCarousel();
}

// Infinite loop with transition reset for smooth effect
function handleEndOfSlide() {
  if (currentIndex === 0) {
    carousel.style.transition = 'none'; // Disable transition temporarily
    carousel.style.transform = `translateX(0)`; // Immediately jump back to the first slide
    setTimeout(() => {
      carousel.style.transition = 'transform 1.75s ease-in-out'; // Re-enable transition
    }, 0); // Small delay to allow the reset to happen before the next transition
  }
}

setInterval(() => {
  nextSlide();
  handleEndOfSlide(); // Check if we've reached the end to handle looping smoothly
}, 3000);


