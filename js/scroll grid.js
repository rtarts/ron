// Intersection observer API for animation on scroll
const photos = document.querySelectorAll(".photo");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Array.from(photos).indexOf(entry.target);
      const delay = index * 200; // Adjust the delay as needed
      setTimeout(() => {
        entry.target.style.opacity = 1;
        entry.target.style.transition = "transform 0.7s ease-in-out, opacity 0.5s ease-in-out";
        entry.target.style.transform = "translateY(0px)";
      }, delay);
    }
  });
});

photos.forEach((photo) => {
  photo.style.opacity = 0;
  photo.style.transform = "translateY(100px)";
  observer.observe(photo);
});
