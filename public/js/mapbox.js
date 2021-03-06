/* eslint-disable */
export const displayMap = (locations) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmVybmFuZG92aWRpZ2FsIiwiYSI6ImNrMjd1NzN3dTBqb3Qzam1qaTVyNzJoNHAifQ.PvmNmUp0aeodLuiG6m2LeQ';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/fernandovidigal/ck27uasu71tox1dp6xyfucfa8',
        scrollZoom: false
        //center: [-118.113491, 34.111745],
        //zoom: 4,
        //interactive: false
    });
    
    const bounds = new mapboxgl.LngLatBounds();
    
    locations.forEach(loc => {
        // Create Marker
        const el = document.createElement('div');
        el.className = 'marker';
    
        // Add Marker
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        }).setLngLat(loc.coordinates).addTo(map);
    
        // Add popup
        new mapboxgl.Popup({
            offset: 30
        })
        .setLngLat(loc.coordinates)
        .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
        .addTo(map);
    
        // Extends the map bounds to include the current location
        bounds.extend(loc.coordinates);
    });
    
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
};

