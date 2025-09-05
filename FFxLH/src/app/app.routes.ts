/**
 * Service Router - Gère le routage de l'application
 * Conçu pour être facilement migré vers le Router d'Angular
 */
// @ts-ignore
import { HomePage } from '../pages/homePage.js';
// @ts-ignore
import { GuidesPage } from '../pages/guidesPage.js';
// @ts-ignore
import { KnowledgeBasePage } from '../pages/knowledgeBasePage.js';
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
    constructor(container: HTMLElement) {
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
    navigateTo(path: string): void {
        // Extraire le nom de la page du chemin
        const pageName: string = path.split('/').pop()?.replace('.html', '') || 'home';

        // Définir le type du constructeur de page
        interface PageConstructor {
            new(container: HTMLElement): void;
        }

        const homePage: PageConstructor = HomePage;
        const guidesPage: PageConstructor = GuidesPage;
        const knowledgeBasePage: PageConstructor = KnowledgeBasePage;

        switch (pageName) {
            case 'home':
            case 'index':
                new (homePage as PageConstructor)(this.#container);
                break;
            case 'guides':
                new (guidesPage as PageConstructor)(this.#container);
                break;
            case 'knowledge-base':
                new (knowledgeBasePage as PageConstructor)(this.#container);
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
