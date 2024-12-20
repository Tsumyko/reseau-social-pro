import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../../store/slices/mapSlice';
import type { RootState } from '../../store';

const MapFilters: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedFilters } = useSelector((state: RootState) => state.map);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilters({ type: event.target.value }));
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilters({ category: event.target.value }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <div className="flex flex-wrap gap-4">
        <select
          className="px-3 py-2 border rounded-md"
          value={selectedFilters.type || ''}
          onChange={handleTypeChange}
        >
          <option value="">Tous les types</option>
          <option value="artisan">Artisans</option>
          <option value="association">Associations</option>
          <option value="pme">PME</option>
        </select>

        <select
          className="px-3 py-2 border rounded-md"
          value={selectedFilters.category || ''}
          onChange={handleCategoryChange}
        >
          <option value="">Toutes les catégories</option>
          <option value="alimentation">Alimentation</option>
          <option value="services">Services</option>
          <option value="artisanat">Artisanat</option>
        </select>
      </div>
    </div>
  );
};

export default MapFilters;