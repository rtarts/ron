document.addEventListener("DOMContentLoaded", () => {
  // Create the custom cursor element
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  // Update cursor position
  document.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });

  // Add hover effect
  const hoverTargets = document.querySelectorAll(".hover-target");
  hoverTargets.forEach((target) => {
    target.addEventListener("mouseenter", () => {
      cursor.classList.add("hovered");
    });
    target.addEventListener("mouseleave", () => {
      cursor.classList.remove("hovered");
    });
  });
});
