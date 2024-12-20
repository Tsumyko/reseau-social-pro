import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';
import { setCenter, setZoom } from '../../store/slices/mapSlice';
import type { RootState } from '../../store';

interface Location {
  id: string;
  name: string;
  position: google.maps.LatLngLiteral;
  type: 'artisan' | 'association' | 'pme';
  description: string;
}

const MapComponent: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = React.useState<Location | null>(null);
  const { center, zoom } = useSelector((state: RootState) => state.map);
  const dispatch = useDispatch();

  // Style de la carte
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    minHeight: '500px'
  };

  // Options de la carte
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    streetViewControl: true,
    mapTypeControl: true,
  };

  // Exemple de données de marqueurs
  const locations: Location[] = [
    {
      id: '1',
      name: 'Boulangerie Artisanale',
      position: { lat: 48.8584, lng: 2.2945 },
      type: 'artisan',
      description: 'Artisan boulanger depuis 1980'
    },
    // Ajoutez d'autres emplacements ici
  ];

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleMapClick = () => {
    setSelectedLocation(null);
  };

  const handleCenterChanged = () => {
    // Mise à jour du centre dans le store Redux
  };

  return (
    <LoadScript googleMapsApiKey={process.env.VITE_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        onClick={handleMapClick}
        options={options}
        onCenterChanged={handleCenterChanged}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            onClick={() => handleMarkerClick(location)}
          />
        ))}

        {selectedLocation && (
          <InfoWindow
            position={selectedLocation.position}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div className="p-2 max-w-sm">
              <h3 className="font-bold text-lg mb-1">{selectedLocation.name}</h3>
              <p className="text-gray-600">{selectedLocation.description}</p>
              <div className="mt-2">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {selectedLocation.type}
                </span>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;