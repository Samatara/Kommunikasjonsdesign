document.addEventListener('DOMContentLoaded', () => {
    initializeMap('map1', [59.127094702799695, 11.38537581996161], 'Niels Stubs Gate 5');

    
    initializeMap('map2', [59.1200, 11.3855], 'Borgergata 35'
    );
});

function initializeMap(mapId, coordinates, title) {
    const map = L.map(mapId, {
        scrollWheelZoom: false,
    }).setView(coordinates, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const marker = L.marker(coordinates).addTo(map);

    marker.bindPopup(`
        <strong>${title}</strong><br>
    `);

 
    marker.openPopup();

    
    setTimeout(() => {
        map.invalidateSize();
    }, 100);

    
    window.addEventListener('resize', () => {
        map.invalidateSize();
    });
}
