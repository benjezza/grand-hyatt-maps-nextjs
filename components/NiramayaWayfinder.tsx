import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className }) => {
  const [map, setMap] = useState<mapboxgl.Map>();

  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? '';

    if (mapContainerRef.current && !map) {
      const newMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/benjezza/clf5ix3cx000501nzejy4cfhz',
        center: [145.466312, -16.520432],
        pitch: 50,
        zoom: 18,
        bearing: -95,
      });

      const bounds = new mapboxgl.LngLatBounds(
        new mapboxgl.LngLat(145.464349, -16.524464), // southwest coordinates
        new mapboxgl.LngLat(145.466666, -16.516112) // northeast coordinates
      );

      newMap.setMaxBounds(bounds);

      setMap(newMap);

      // Add zoom controls
      const nav = new mapboxgl.NavigationControl();
      newMap.addControl(nav, 'top-right');
    }
  }, [map]);

  return <div className={className} ref={mapContainerRef}></div>;
};

export default Map;
