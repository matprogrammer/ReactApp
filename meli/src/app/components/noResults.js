import React from 'react';
import icon from '../assets/search-icon.png';
import '../styles/noResults.scss';

function NoResults() {
  return (
    <div className="no-results-container">
        <img src={icon} className="search-icon-no-result" />
        <div style={{marginLeft: '40px'}}>
            <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
            <ul>
                <li><b>Revisa la ortografía</b> de la palabra.</li>
                <li>Utiliza <b>palabras más genéricas</b> o menos palabras.</li>
                <li>Navega por las categorías para encontrar un producto similar</li>
            </ul>
        </div>
    </div>
  );
}

export default NoResults;
