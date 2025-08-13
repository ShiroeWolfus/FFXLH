/**
 * Service API - Gère les requêtes vers les APIs
 * Conçu pour être facilement migré vers un service Angular
 */
export class ApiService {
    /**
     * URL de base pour les requêtes API
     * @private
     */
    #baseUrl = 'data'; // Pour la phase 1, on utilise des fichiers JSON locaux
    
    /**
     * Récupère des données depuis l'API
     * @param {string} endpoint - Point d'entrée de l'API
     * @returns {Promise<any>} - Promesse contenant les données
     */
    async get(endpoint) {
        try {
            const response = await fetch(`${this.#baseUrl}/${endpoint}.json`);
            
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error(`Erreur lors de la récupération des données: ${error.message}`);
            throw error;
        }
    }
    
    /**
     * Méthode pour les futures requêtes POST (à implémenter)
     * @param {string} endpoint - Point d'entrée de l'API
     * @param {Object} data - Données à envoyer
     * @returns {Promise<any>} - Promesse contenant la réponse
     */
    async post(endpoint, data) {
        // À implémenter lorsque le backend sera disponible
    }
}

// Singleton pour l'utilisation dans toute l'application
export const apiService = new ApiService();
