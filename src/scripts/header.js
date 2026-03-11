document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (page === "" || page === "index.html") {
            if (href === "index.html" || href === "/") {
                link.classList.add('active');
            }
        } 
        else if (page === href) {
            link.classList.add('active');
        }
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '0.4rem 1rem'; 
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '0.6rem 1rem';
        }
    });
});