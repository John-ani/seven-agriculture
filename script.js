document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    const fadeElements = document.querySelectorAll(".fade-in");
    window.addEventListener("scroll", () => {
        fadeElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    });
});
