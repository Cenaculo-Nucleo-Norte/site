document.addEventListener('DOMContentLoaded', () => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const page = link.getAttribute('href');
        loadPage(page);
        history.pushState({}, "", page);
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    
    link.classList.add('active');

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