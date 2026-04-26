document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(n => n.addEventListener('click', () => {
        navMenu.classList.remove('active');
    }));

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            navbar.style.padding = '0';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // --- Scroll Animations ---
    // Seleccionar elementos a animar
    const animatedElements = document.querySelectorAll('.section-title, .about-text, .about-image, .restaurante-image, .restaurante-info, .ruta-card, .highlight');
    
    // Añadimos clase inicial oculta a todos
    animatedElements.forEach(el => el.classList.add('fade-up'));

    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Solo anima una vez
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => scrollObserver.observe(el));

    // Restaurante Carousel
    const carouselTrack = document.querySelector('.carousel-track');
    if (carouselTrack) {
        const slides = carouselTrack.querySelectorAll('img');
        let currentIndex = 0;
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 3000); // Cambia de imagen cada 3 segundos
    }
});
