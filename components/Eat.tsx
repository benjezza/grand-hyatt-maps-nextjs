import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { EatMarkers } from '../pages/api/EatMarkers';

interface MapProps {
  className?: string;
}

const sortedMarkers = EatMarkers.sort(
  (a, b) => (a.order ?? 100) - (b.order ?? 100)
);

const Map: React.FC<MapProps> = ({ className }) => {
  const [map, setMap] = useState<mapboxgl.Map>();
  const [popup, setPopup] = useState<mapboxgl.Popup | null>(null);
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<number | null>(
    null
  );

  //Uncomment to show zoom level (there are three places to uncomment)
  //const [zoomLevel, setZoomLevel] = useState<number>(14);

  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? '';

    if (mapContainerRef.current && !map) {
      const newMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/benjezza/clexs2iqw002e01suy37fucoi',
        center: [144.963162, -37.814258],
        pitch: 50,
        zoom: 14,
        maxBounds: [
          [144.94379218514516, -37.895157602944195], // Southwest coordinates
          [145.0164867072722, -37.801306000736034], // Northeast coordinates
        ],
      });

      setMap(newMap);

      newMap.on('load', () => {
        newMap.addLayer({
          id: 'buildings',
          type: 'fill-extrusion',
          source: 'composite',
          'source-layer': 'building',
          paint: {
            'fill-extrusion-color': '#fff',
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height'],
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height'],
            ],
            'fill-extrusion-opacity': 0.6,
          },
        });
      });
    }

    // Uncomment to show zoom level
    // if (map) {
    //   map.on('zoom', () => {
    //     setZoomLevel(map.getZoom());
    //   });
    // }

    if (map) {
      EatMarkers.forEach((markerProps) => {
        const markerElement = document.createElement('div');
        markerElement.innerHTML = `
        <div style='position: relative'>
    <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="${markerProps.color}" />
    </svg>
  </div>
    `;

        const marker = new mapboxgl.Marker({ element: markerElement })
          .setLngLat([markerProps.lng, markerProps.lat])
          .addTo(map);

        const newPopup = new mapboxgl.Popup({ offset: [0, -30] }).setHTML(`
      <div style=' z-index: 99999; width:100%; height: auto; padding: 6px;'>
        <img src='${markerProps.image}' style="width: 100%; height: auto; margin-bottom: 12px;" />
        <h3 style='font-size: 2em; margin: 20px 0;'>${markerProps.title}</h3>
        <p style='margin-bottom: 10px;'>${markerProps.description}</p>
        <button class='popUpBtn' style='color: #fff;' onclick="window.open('${markerProps.link}')">Website</button>
        <button class='popUpBtn' style='color: #fff;' onclick="window.open('${markerProps.nav}')">Directions</button>
        </div>
    `);

        marker.setPopup(newPopup);

        // Add click handler to marker to update the popup state and center/fly to the marker
        marker.getElement().addEventListener('click', () => {
          setSelectedMarkerIndex(EatMarkers.indexOf(markerProps));
          setPopup(newPopup);
          map.flyTo({
            center: [markerProps.lng, markerProps.lat],
            offset: [0, 230],
            zoom: 16,
            duration: 3000,
          });
        });

        // Add title label above the marker icon for high zoom levels and reduce opacity for low zoom levels

        map.on('zoom', () => {
          const zoomLevel = map.getZoom();
          if (zoomLevel > 16) {
            marker.getElement().innerHTML = `
              <div style='position: relative'>
                <h3 style='font-size: 1em; text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;'>${markerProps.title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="${markerProps.color}" />
                </svg>
              </div>
            `;
            marker.getElement().style.opacity = '1.0';
          } else {
            marker.getElement().innerHTML = `
              <div style='position: relative'>
                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="${markerProps.color}" />
                </svg>
              </div>
            `;
            marker.getElement().style.opacity = `${(zoomLevel - 10) / 6}`; // adjust the formula to change the rate of opacity change
          }
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
      {/* Uncomment to show zoom level */}
      {/* <div className="mt-12 absolute top-28 p-12 bg-orange-400 text-3xl z-50">{zoomLevel.toFixed(1)}</div> */}
      <div
        className="z-10 fixed bottom-0 left-0 w-full bg-white p-4 flex flex-wrap flex-col justify-between"
        onClick={handleLegendClick} // add event listener here
      >
        <h3 className="font-bold text-lg">Select a Destination:</h3>
        <select
          className="cursor-pointer p-4 mb-1 rounded bg-gray-100 font-bold text-xs border-2 origin-bottom-left appearance-none"
          value={selectedMarkerIndex ?? ''}
          onChange={(event) => {
            const index = parseInt(event.target.value, 10);
            const markerProps = EatMarkers[index];
            setSelectedMarkerIndex(index);
            map?.flyTo({
              center: [markerProps.lng, markerProps.lat],
              offset: [0, 150],
              zoom: markerProps.zoom,
              bearing: markerProps.bearing,
              duration: 3000,
            });
          }}
        >
          <option value="" disabled selected>
            Select a Destination
          </option>
          {sortedMarkers.map((markerProps, index) => (
            <option key={index} value={index} style={{ padding: '20px' }}>
              {markerProps.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Map;
