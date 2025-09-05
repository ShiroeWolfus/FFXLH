//création d'une barre de navigation qui s'implémente dans toutes les pages avec le composant <NavBar /> activation 
//importation des modules nécessaires
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css'; // Importation du fichier CSS pour le style

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
        <li>
          <Link to="/services">Guides</Link>
        </li>
        <li>
          <Link to="/contact"></Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
//exportation du composant pour l'utiliser dans d'autres fichiers
//le CSS est dans le fichier navBar.css
//le composant NavBar utilise des liens de react-router-dom pour la navigation entre les pages