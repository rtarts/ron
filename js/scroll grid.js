const masonryItems = document.querySelectorAll(".masonry-item");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Array.from(masonryItems).indexOf(entry.target);
      const delay = index * 200; // Adjust the delay as needed
      setTimeout(() => {
        entry.target.style.opacity = 1; // Fade-in
        entry.target.style.transform = "translateY(0px)"; // Move into view
      }, delay);
    }
  });
});

masonryItems.forEach((item) => {
  observer.observe(item);
});
