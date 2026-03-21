// --- LÓGICA PARA EL MENÚ MÓVIL (HAMBURGUESA) ---
const mobileMenu = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');

// Función para alternar la clase 'active' en el menú y el icono
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-active');
        navMenu.classList.remove('active');
    });
});

// --- EFECTO DE BARRA DE NAVEGACIÓN STICKY AL HACER SCROLL ---
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    // Si el scroll es mayor a 50px, añade la clase 'sticky'
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});