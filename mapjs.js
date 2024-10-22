function initializeMap() {
    return new Promise((resolve, reject) => {
        
        const map = L.map('map').setView([59.12032839107434, 11.385684161183917], 13);

        
        let tilesLoaded = false;
        let layersLoaded = false;

      
        const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        
        tileLayer.on('load', function () {
            tilesLoaded = true;
            checkIfLoaded();
        });

       
        const bounds = [
            [59.07, 11.32],
            [59.15, 11.46]
        ];

       
        map.setMaxBounds(bounds);
        map.fitBounds(bounds);

       
        const geojsonData = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "title": "Niels Stubs Gate 5",
                        "description": "Fire incident at Niels Stubs Gate 5.",
                        "marker-color": "#ff7c00",
                        "marker-symbol": "fire"
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
                        "marker-color": "#ff7c00",
                        "marker-symbol": "fire"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [11.3855, 59.1200]
                    }
                }
            ]
        };

       
        const geoJsonLayer = L.geoJSON(geojsonData).addTo(map);

       
        geoJsonLayer.on('layeradd', function () {
            layersLoaded = true;
            checkIfLoaded();
        });

       
        geoJsonLayer.eachLayer(function (layer) {
            if (layer.feature.properties && layer.feature.properties.title) {
                layer.bindPopup("<strong>" + layer.feature.properties.title + "</strong><br>" + layer.feature.properties.description);
            }
        });

       
        setTimeout(function () {
            map.invalidateSize();
        }, 100);

       
        function checkIfLoaded() {
            if (tilesLoaded && layersLoaded) {
                resolve(map); 
            }
        }
    });
}


window.onload = function () {
    initializeMap().then((map) => {
        console.log('Map is fully loaded and ready');
    }).catch((error) => {
        console.error('An error occurred while loading the map', error);
    });
};
