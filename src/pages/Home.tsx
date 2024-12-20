import React from 'react';
import MapComponent from '../components/map/Map';
import MapFilters from '../components/map/MapFilters';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Découvrez les professionnels près de chez vous</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Sidebar avec filtres */}
        <div className="lg:col-span-1">
          <MapFilters />
          
          {/* Liste des résultats */}
          <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
            <h2 className="text-lg font-semibold mb-4">Résultats de la recherche</h2>
            <div className="space-y-4">
              {/* Liste à remplir avec les résultats filtrés */}
            </div>
          </div>
        </div>

        {/* Carte */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm h-[calc(100vh-12rem)]">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;