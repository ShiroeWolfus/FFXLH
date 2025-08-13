/**
 * Service Router - Gère le routage de l'application
 * Conçu pour être facilement migré vers le Router d'Angular
 */
import { HomePage } from '../pages/homePage.js';
import { GuidesPage } from '../pages/GuidesPage.js';
import { KnowledgeBasePage } from '../pages/KnowledgeBasePage.js';
// Importer d'autres pages...

export class Router {
    /**
     * Conteneur principal
     * @private
     */
    #container;
    
    /**
     * Initialise le routeur
     * @param {HTMLElement} container - Conteneur où les pages seront rendues
     */
    constructor(container) {
        this.#container = container;
    }
    
    /**
     * Initialise le routeur
     */
    init() {
        // Déterminer la page à afficher
        const path = window.location.pathname;
        this.navigateTo(path);
    }
    
    /**
     * Navigue vers une page spécifique
     * @param {string} path - Chemin de la page
     */
    navigateTo(path) {
        // Extraire le nom de la page du chemin
        const pageName = path.split('/').pop().replace('.html', '') || 'home';
        
        // Initialiser la page correspondante
        switch (pageName) {
            case 'home':
            case 'index':
                new HomePage(this.#container);
                break;
            case 'guides':
                new GuidesPage(this.#container);
                break;
            case 'knowledge-base':
                new KnowledgeBasePage(this.#container);
                break;
            // Ajouter d'autres pages...
            default:
                this.showNotFound();
                break;
        }
    }
    
    /**
     * Affiche une page 404
     * @private
     */
    showNotFound() {
        this.#container.innerHTML = `
            <div class="container py-5 text-center">
                <h1>Page non trouvée</h1>
                <p>La page que vous recherchez n'existe pas.</p>
                <a href="index.html" class="btn btn-primary">Retour à l'accueil</a>
            </div>
        `;
    }
}
