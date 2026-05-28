/* ============================================
   SENZA - JavaScript
   Funcionalidades interactivas
   ============================================ */

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Función de scroll suave a secciones
function scrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Marcar el nav link activo según la sección actual
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Event listeners para botones de diagnóstico
const diagnosticButtons = document.querySelectorAll('.diagnostic-button');
diagnosticButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        diagnosticButtons.forEach(btn => btn.style.transform = 'scale(1)');
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', function(event) {
    const isClickInsideNav = hamburger && hamburger.contains(event.target);
    const isClickInsideMenu = navMenu && navMenu.contains(event.target);

    if (!isClickInsideNav && !isClickInsideMenu && navMenu && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});
