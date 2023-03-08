import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { markers } from '../pages/api/markers';

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className }) => {
  const [map, setMap] = useState<mapboxgl.Map>();
  const [popup, setPopup] = useState<mapboxgl.Popup | null>(null);

  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? '';

    if (mapContainerRef.current && !map) {
      const newMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/benjezza/clejdh8x8000e01oaknbdwt5e',
        center: [131.93743, -12.678073],
        zoom: 6,
      });

      setMap(newMap);

      // Add zoom controls
      const nav = new mapboxgl.NavigationControl();
      newMap.addControl(nav, 'top-right');
    }

    if (map) {
      markers.forEach((markerProps) => {
        const markerElement = document.createElement('div');
        markerElement.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="${markerProps.color}" />
      </svg>
    `;

        const marker = new mapboxgl.Marker({ element: markerElement })
          .setLngLat([markerProps.lng, markerProps.lat])
          .addTo(map);

        const newPopup = new mapboxgl.Popup({ offset: [0, -30] }).setHTML(`
      <div style=' z-index: 99999; width:100%; height: auto; padding: 20px;'>
        <img src='${markerProps.image}' style="width: 100%; height: auto; margin-bottom: 12px;" />
        <h3 style='font-size: 2em; margin: 20px 0;'>${markerProps.title}</h3>
        <p>${markerProps.description}</p>
        <button onclick="window.open('${markerProps.link}')">Go to ${markerProps.title} on Example.com</button>
      </div>
    `);

        marker.setPopup(newPopup);

        // Add click handler to marker to update the popup state and center/fly to the marker
        marker.getElement().addEventListener('click', () => {
          setPopup(newPopup);
          map.flyTo({
            center: [markerProps.lng, markerProps.lat],
            offset: [0, 200],
            zoom: 12,
            duration: 3000,
          });
        });
      });
    }
  }, [map]);

  const handleLegendClick = () => {
    // Check if a popup is currently open
    if (popup) {
      // Close the popup
      popup.remove();
      setPopup(null);
    }
  };

  return (
    <div className={className} ref={mapContainerRef}>
      <div
        className="z-50 absolute top-10 left-10 w-auto bg-white p-2 flex flex-wrap flex-col justify-between"
        onClick={handleLegendClick} // add event listener here
      >
        <h3 className="font-bold text-lg">Select a Destination:</h3>
        <select
          className="cursor-pointer p-2 mr-1 mb-1 rounded bg-gray-100 font-bold text-xs border-2 origin-bottom-left whitespace-nowrap"
          onChange={(event) => {
            const index = parseInt(event.target.value, 10);
            const markerProps = markers[index];
            map?.flyTo({
              center: [markerProps.lng, markerProps.lat],
              offset: [0, 200],
              zoom: 12,
              duration: 3000,
            });
          }}
        >
          {markers.map((markerProps, index) => (
            <option key={index} value={index}>
              {markerProps.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Map;
