/**
 * Composant Header - Gère l'en-tête du site
 * Conçu pour être facilement migré vers un composant Angular
 */
export class Header {
    /**
     * Élément DOM du header
     * @private
     */
    #element;
    
    /**
     * Initialise le composant Header
     * @param {HTMLElement} container - Conteneur où le header sera rendu
     */
    constructor(container) {
        this.#element = container;
        this.render();
        this.attachEventListeners();
    }
    
    /**
     * Génère le HTML du header
     * @private
     */
    render() {
        this.#element.innerHTML = `
            <header class="header bg-dark text-light">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-dark">
                        <a class="navbar-brand" href="index.html">
                            <img src="assets/images/logo.png" alt="FFXIV Log Horizon" height="60">
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html" data-page="home">Accueil</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/guides.html" data-page="guides">Guides</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/knowledge-base.html" data-page="knowledge">Base de connaissances</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/events.html" data-page="events">Événements</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/community.html" data-page="community">Communauté</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/resources.html" data-page="resources">Ressources</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        `;
        
        // Marquer le lien actif
        this.setActivePage();
    }
    
    /**
     * Définit la page active dans la navigation
     * @private
     */
    setActivePage() {
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
        const links = this.#element.querySelectorAll('.nav-link');
        
        links.forEach(link => {
            if (link.dataset.page === currentPage) {
                link.classList.add('active');
            }
        });
    }
    
    /**
     * Attache les écouteurs d'événements
     * @private
     */
    attachEventListeners() {
        // Futurs événements (recherche, menu mobile, etc.)
    }
}
