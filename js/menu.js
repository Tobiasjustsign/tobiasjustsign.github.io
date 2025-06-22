// js/menu.js

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    toggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        toggle.classList.toggle('open');  // Pour animer l'icône hamburger si besoin
    });
});
