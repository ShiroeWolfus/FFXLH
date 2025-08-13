/**
 * Module principal de l'application
 * Point d'entrée pour l'initialisation des composants
 */
import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import { Router } from './services/router.js';

// Initialiser les composants globaux
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser l'en-tête
    const headerContainer = document.getElementById('header-container');
    new Header(headerContainer);
    
    // Initialiser le pied de page
    const footerContainer = document.getElementById('footer-container');
    new Footer(footerContainer);
    
    // Initialiser le routeur
    const mainContainer = document.querySelector('main');
    const router = new Router(mainContainer);
    router.init();
});
