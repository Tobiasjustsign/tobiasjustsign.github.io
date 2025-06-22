document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('nav ul');

    if (burger && navMenu) {
        // Gestion du clic sur le burger
        burger.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            burger.classList.toggle('open');
            const expanded = burger.getAttribute('aria-expanded') === 'true';
            burger.setAttribute('aria-expanded', !expanded);
        });

        // Gestion de l'accessibilité au clavier
        burger.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                burger.click();
            }
        });

        // Ferme le menu lorsque qu'un lien est cliqué (pour mobile)
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('open');
                    burger.classList.remove('open');
                    burger.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Réinitialise l'état du menu lors du redimensionnement en mode desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('open');
                burger.classList.remove('open');
                burger.setAttribute('aria-expanded', 'false');
            }
        });
    } else {
        console.error("Erreur : Les éléments '.burger' ou 'nav ul' n'ont pas été trouvés.");
    }
});
