import React from 'react';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Découvrez les professionnels près de chez vous</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Carte interactive</h2>
          {/* Placeholder pour la carte */}
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Actualités récentes</h2>
          {/* Liste des actualités */}
        </div>
      </div>
    </div>
  );
};

export default Home;