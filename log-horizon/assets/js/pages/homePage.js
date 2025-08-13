/**
 * Module HomePage - Gère la page d'accueil
 * Conçu pour être facilement migré vers un composant Angular
 */
import { apiService } from '../services/apiService.js';
import { NewsCardComponent } from '../components/NewsCard.js';
import { EventListComponent } from '../components/EventList.js';

export class HomePage {
    /**
     * Conteneur principal
     * @private
     */
    #mainContainer;
    
    /**
     * Données des actualités
     * @private
     */
    #newsData = [];
    
    /**
     * Données des événements
     * @private
     */
    #eventsData = [];
    
    /**
     * Initialise la page d'accueil
     * @param {HTMLElement} container - Conteneur où la page sera rendue
     */
    constructor(container) {
        this.#mainContainer = container;
        this.init();
    }
    
    /**
     * Initialise la page et charge les données
     * @private
     */
    async init() {
        try {
            // Afficher un loader
            this.#mainContainer.innerHTML = '<div class="text-center py-5"><div class="spinner-border" role="status"></div></div>';
            
            // Charger les données (parallèlement)
            const [newsData, eventsData] = await Promise.all([
                apiService.get('news'),
                apiService.get('events')
            ]);
            
            this.#newsData = newsData;
            this.#eventsData = eventsData;
            
            // Rendre la page
            this.render();
        } catch (error) {
            console.error('Erreur lors du chargement de la page d\'accueil:', error);
            this.#mainContainer.innerHTML = `
                <div class="alert alert-danger m-5" role="alert">
                    Une erreur est survenue lors du chargement de la page. Veuillez réessayer plus tard.
                </div>
            `;
        }
    }
    
    /**
     * Génère le HTML de la page d'accueil
     * @private
     */
    render() {
        this.#mainContainer.innerHTML = `
            <!-- Hero Section -->
            <section class="hero py-5 bg-primary text-white">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h1>Bienvenue sur FFXIV Log Horizon</h1>
                            <p class="lead">Votre portail francophone pour tout ce qui concerne Final Fantasy XIV</p>
                            <a href="pages/guides.html" class="btn btn-light btn-lg">Explorer les guides</a>
                        </div>
                        <div class="col-lg-6">
                            <img src="assets/images/hero-image.jpg" alt="Final Fantasy XIV" class="img-fluid rounded">
                        </div>
                    </div>
                </div>
            </section>

            <!-- Latest News Section -->
            <section class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Dernières actualités</h2>
                    <div class="row news-container"></div>
                </div>
            </section>

            <!-- Upcoming Events -->
            <section class="py-5 bg-light">
                <div class="container">
                    <h2 class="text-center mb-4">Événements à venir</h2>
                    <div class="events-container"></div>
                </div>
            </section>

            <!-- Featured Guides Section -->
            <section class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Guides populaires</h2>
                    <div class="row guides-container">
                        <!-- Les guides seront chargés ici -->
                    </div>
                </div>
            </section>
        `;
        
        // Initialiser les sous-composants
        this.initSubComponents();
    }
    
    /**
     * Initialise les sous-composants de la page
     * @private
     */
    initSubComponents() {
        // Initialiser le composant d'actualités
        const newsContainer = this.#mainContainer.querySelector('.news-container');
        new NewsCardComponent(newsContainer, this.#newsData);
        
        // Initialiser le composant d'événements
        const eventsContainer = this.#mainContainer.querySelector('.events-container');
        new EventListComponent(eventsContainer, this.#eventsData);
        
        // Charger les guides populaires (à implémenter)
    }
}
