import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { RunMarkers } from '../pages/api/RunMarkers';
import TagManager from 'react-gtm-module';

interface MapProps {
  className?: string;
}

const sortedMarkers = RunMarkers.sort(
  (a, b) => (a.order ?? 100) - (b.order ?? 100)
);

const Map: React.FC<MapProps> = ({ className }) => {
  const [map, setMap] = useState<mapboxgl.Map>();
  const [popup, setPopup] = useState<mapboxgl.Popup | null>(null);
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<number>(0);

  //Uncomment to show zoom level (there are three places to uncomment)
  //const [zoomLevel, setZoomLevel] = useState<number>(14);

  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? '';

    // Initialize GTM
    const tagManagerArgs = {
      gtmId: 'GTM-W5XK44D',
    };
    TagManager.initialize(tagManagerArgs);

    // Track the page load event
    TagManager.dataLayer({
      dataLayer: {
        event: 'page_load',
      },
    });

    if (mapContainerRef.current && !map) {
      const newMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/benjezza/clf97qk06000b01p7wyf9szeu',
        center: [144.96968999086687, -37.814759644486415],
        pitch: 50,
        zoom: 14,
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
      RunMarkers.forEach((markerProps) => {
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
      <div class='popUpWrapper'>
        <img src='${markerProps.image}' style="width: 100%; height: auto; margin-bottom: 12px;" />
        <h3 style='font-size: 2em; margin: 20px 0;'>${markerProps.title}</h3>
        <span style='font-size: 1.2em; display: inline;'>Distance approx:</span>
        <p style='font-size: 1.5em; display: inline;'>${markerProps.length}</p>
        <p style='margin: 10px 0;'>${markerProps.description}</p>
                <button class='popUpBtn brandBlue' style='color: #fff;' onclick="window.open('${markerProps.nav}')">Directions</button>
      </div>
    `);

        marker.setPopup(newPopup);

        // Add click handler to marker to update the popup state and center/fly to the marker
        marker.getElement().addEventListener('click', () => {
          setSelectedMarkerIndex(RunMarkers.indexOf(markerProps));
          setPopup(newPopup);
          map.flyTo({
            center: [markerProps.lng, markerProps.lat],
            offset: [0, 200],
            zoom: 16,
            duration: 3000,
          });
        });

        // Add title label above the marker icon for high zoom levels and reduce opacity for low zoom levels

        map.on('zoom', () => {
          const zoomLevel = map.getZoom();
          if (zoomLevel > 12) {
            marker.getElement().innerHTML = `
              <div style='position: relative'>
                <h3 style='font-size: 1em; text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;'>${markerProps.title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="${markerProps.color}" stroke="#fff" stroke-width="1" />
</svg>

              </div>
            `;
            marker.getElement().style.opacity = '1.0';
          } else {
            marker.getElement().innerHTML = `
              <div style='position: relative'>
                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="${markerProps.color}" stroke="#fff" stroke-width="1" />
</svg>

              </div>
            `;
            marker.getElement().style.opacity = `${(zoomLevel - 8) / 6}`; // adjust the formula to change the rate of opacity change
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
            const markerProps = RunMarkers[index];
            setSelectedMarkerIndex(index);
            map?.flyTo({
              center: [markerProps.lng, markerProps.lat],
              offset: [markerProps.offsetX, markerProps.offsetY],
              zoom: markerProps.zoom,
              bearing: markerProps.bearing,
              duration: 3000,
            });
            // Track the option selection event
            TagManager.dataLayer({
              dataLayer: {
                event: 'option_select',
                selected_option: markerProps.title,
              },
            });
          }}
        >
          <option value="" disabled selected>
            Select a Destination
          </option>
          {sortedMarkers.map((markerProps, index) => (
            <option
              key={markerProps.index}
              value={index}
              style={{ padding: '20px' }}
            >
              {markerProps.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Map;
