document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        if (!path && href === "index.html") {
            link.classList.add('active');
        }

        if (path === href) {
            link.classList.add('active');
        }

        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });

    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
});