document.addEventListener("DOMContentLoaded", () => {
    console.log("Fullscreen script is running!");

    const masonryItems = document.querySelectorAll(".masonry-item img");
    const fullscreenOverlay = document.getElementById("fullscreenOverlay");
    const fullscreenImage = document.getElementById("fullscreenImage");
    const closeButton = document.getElementById("closeButton");

    // Function to open fullscreen view
    const openFullscreen = (src) => {
        fullscreenImage.src = src;
        fullscreenOverlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent scrolling
    };

    // Function to close fullscreen view
    const closeFullscreen = () => {
        fullscreenOverlay.classList.remove("active");
        document.body.style.overflow = ""; // Restore scrolling
        setTimeout(() => {
            fullscreenImage.src = ""; // Clear image source for performance
        }, 300);
    };

    // Attach both click and touchstart events to all masonry items
    masonryItems.forEach((item) => {
        item.addEventListener("click", () => openFullscreen(item.src));
        item.addEventListener("touchstart", () => openFullscreen(item.src)); // Support for mobile touch
    });

    // Close button functionality
    closeButton.addEventListener("click", closeFullscreen);
    closeButton.addEventListener("touchstart", closeFullscreen); // Support for mobile touch

    // Close overlay when tapping outside the image
    fullscreenOverlay.addEventListener("click", (e) => {
        if (e.target === fullscreenOverlay) {
            closeFullscreen();
        }
    });
    fullscreenOverlay.addEventListener("touchstart", (e) => {
        if (e.target === fullscreenOverlay) {
            closeFullscreen();
        }
    });
});
