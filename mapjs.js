function initializeMap() {
    return new Promise((resolve, reject) => {
        const map = L.map('map').setView([59.12032839107434, 11.385684161183917], 13);

        const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const geojsonData = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "title": "Niels Stubs Gate 5",
                        "description": "Fire incident at Niels Stubs Gate 5.",
                        "img": "./picvideo/brannstasjon.png" 
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [11.38537581996161, 59.127094702799695]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "title": "Borgergata 35",
                        "description": "Fire incident at Borgergata 35.",
                        "img": "./picvideo/kiwi.png" 
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [11.3855, 59.1200]
                    }
                }
            ]
        };

        const markers = [];

        const geoJsonLayer = L.geoJSON(geojsonData, {
            onEachFeature: function (feature, layer) {
                if (feature.properties && feature.properties.title) {
                    
                    const popupContent = `
                        <strong>${feature.properties.title}</strong><br>
                        ${feature.properties.description}<br>
                        <img src="${feature.properties.img}" alt="${feature.properties.title}" style="width: 100%; height: auto; margin-top: 10px;">
                    `;

                   
                    layer.bindPopup(popupContent);
                    markers.push(layer);  
                }
            }
        }).addTo(map);

        setTimeout(function () {
            map.invalidateSize();
        }, 100);

        resolve({ map, geoJsonLayer, markers });  
    });
}

window.onload = function () {
    initializeMap().then(({ map, geoJsonLayer, markers }) => {
        const scrollContentMapping = [
            { id: "content-1", coords: [11.38537581996161, 59.127094702799695], markerIndex: 0 }, 
            { id: "content-2", coords: [11.3855, 59.1200], markerIndex: 1 }
        ];

        const contentWrapper = document.querySelector('.content-wrapper');
        if (!contentWrapper) {
            console.error('Content wrapper not found!');
            return;
        }

        contentWrapper.addEventListener('scroll', function () {
            const contentSections = document.querySelectorAll('.content p');
            contentSections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    const { coords, markerIndex } = scrollContentMapping[index];
                    map.flyTo([coords[1], coords[0]], 15);

                  
                    markers.forEach(marker => marker.closePopup());

                   
                    markers[markerIndex].openPopup();
                }
            });
        });
    }).catch((error) => {
        console.error('An error occurred while loading the map', error);
    });
};
