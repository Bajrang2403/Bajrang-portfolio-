// ------------------------------
// MOBILE NAVIGATION
// ------------------------------

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// ------------------------------
// SCROLL REVEAL ANIMATION
// ------------------------------

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


revealElements.forEach(element => {

    observer.observe(element);

});


// ------------------------------
// AUTOMATIC FOOTER YEAR
// ------------------------------

document.getElementById("year").textContent =
    new Date().getFullYear();