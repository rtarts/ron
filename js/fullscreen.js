document.addEventListener("DOMContentLoaded", () => {
    console.log("Fullscreen script is running!");

    // Selectors
    const masonryItems = document.querySelectorAll(".masonry-item img");
    const fullscreenOverlay = document.getElementById("fullscreenOverlay");
    const fullscreenImage = document.getElementById("fullscreenImage");
    const closeButton = document.getElementById("closeButton");

    // Add click event to each image
    masonryItems.forEach((item) => {
        item.addEventListener("click", () => {
            console.log(`Image clicked: ${item.src}`); // Debugging line
            // Set the src of the fullscreen image to the clicked image
            fullscreenImage.src = item.src;

            // Show the fullscreen overlay with a clean transition
            fullscreenOverlay.classList.add("active");
        });
    });

    // Close button functionality
    closeButton.addEventListener("click", () => {
        console.log("Close button clicked!"); // Debugging line
        // Hide the fullscreen overlay
        fullscreenOverlay.classList.remove("active");

        // Optional: Clear the src for better performance
        setTimeout(() => {
            fullscreenImage.src = "";
        }, 300); // Matches the transition duration
    });

    // Close overlay on background click
    fullscreenOverlay.addEventListener("click", (e) => {
        if (e.target === fullscreenOverlay) {
            console.log("Background clicked!"); // Debugging line
            fullscreenOverlay.classList.remove("active");
            setTimeout(() => {
                fullscreenImage.src = "";
            }, 300);
        }
    });
});
