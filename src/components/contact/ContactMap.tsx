import React, { useEffect, useRef, useState } from 'react';
import { Search } from 'lucide-react';

declare global {
  interface Window {
    google: any;
  }
}

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load Google Maps Script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU&libraries=places`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      initMap();
    };
    
    script.onerror = () => {
      setError('Failed to load Google Maps');
      setLoading(false);
    };
    
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current) return;

    try {
      const defaultLocation = { lat: 21.2514, lng: 81.6296 }; // Raipur coordinates
      
      // Initialize the map
      const map = new window.google.maps.Map(mapRef.current, {
        center: defaultLocation,
        zoom: 13,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
      });

      // Add a marker for the default location
      new window.google.maps.Marker({
        position: defaultLocation,
        map,
        title: 'Raipur'
      });

      // Initialize the search box
      if (searchInputRef.current) {
        const searchBox = new window.google.maps.places.SearchBox(searchInputRef.current);

        // Bias SearchBox results towards current map's viewport
        map.addListener('bounds_changed', () => {
          searchBox.setBounds(map.getBounds());
        });

        // Listen for the event fired when the user selects a prediction
        searchBox.addListener('places_changed', () => {
          const places = searchBox.getPlaces();

          if (places.length === 0) return;

          // Clear existing markers (optional)
          // markers.forEach(marker => marker.setMap(null));

          const bounds = new window.google.maps.LatLngBounds();

          places.forEach((place: any) => {
            if (!place.geometry || !place.geometry.location) return;

            // Create a marker for each place
            new window.google.maps.Marker({
              map,
              title: place.name,
              position: place.geometry.location,
            });

            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });

          map.fitBounds(bounds);
        });
      }

      // Search for nearby hospitals
      const service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch(
        {
          location: defaultLocation,
          radius: 5000,
          type: 'hospital'
        },
        (results: any[], status: any) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
            results.forEach(place => {
              new window.google.maps.Marker({
                map,
                position: place.geometry.location,
                title: place.name,
              });
            });
          } else {
            console.error('Failed to load nearby hospitals:', status);
          }
          setLoading(false);
        }
      );
    } catch (err) {
      console.error('Map initialization error:', err);
      setError('An error occurred while initializing the map');
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 right-0 z-10 px-4 py-2">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search for hospitals..."
              className="w-full px-4 py-2 pl-4 pr-10 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
              aria-label="Search hospitals"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-20">
          <div className="text-blue-600">Loading map...</div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-20">
          <div className="text-red-600 text-center px-4">
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      <div
        ref={mapRef}
        className="w-full h-full rounded-lg overflow-hidden"
        style={{ marginTop: "3.5rem" }}
      />
    </div>
  );
}
