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
                        "description": `
                            <p>De siste fire årene har hele Norge opplevd en markant økning i antall påsatte branner. 
                            Ifølge statistikk fra Direktoratet for samfunnssikkerhet og beredskap (DSB) utgjør brannstiftelser i dag mellom 20 og 30 prosent 
                            av alle bygningsbrannene i de største byene. Men også i de mindre byene har man nå sett en økning i antall påsatte branner. 
                            Brannsjef i Halden sier derimot at de ser på slike hendelser som sjeldne engangstilfeller.</p>
                            
                            <p>Halden, 2024 – I løpet av sommeren 2024 har Halden kommune vært rammet av to alvorlige husbranner som nå undersøkes 
                            for mulig brannstiftelse. Den første brannen inntraff den 16. juni, da brannvesenet mottok en akutt melding om en omfattende 
                            og stor boligbrann i Busterudgata. Brannen utviklet seg raskt og utgjorde en betydelig trussel, med stor spredningsfare 
                            som potensielt kunne ramme nærliggende boliger.</p>
                        `,
                        
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
                        "description": `
                            <p>Mindre enn åtte timer etter at brannvesenet fikk kontroll over den store brannen, ble to personer arrestert, 
                            mistenkt for å ha forårsaket brannen. Politiet i Halden har derfor iverksatt en grundig og omfattende etterforskning 
                            for å avklare omstendighetene rundt denne dramatiske og farlige hendelsen.</p>
                            
                            <p>Ikke mer enn drøye to uker senere, den 1.juli brøt det ut enda en brann, denne gangen i et trebygg på Borgergata. 
                            Brannen ble ganske raskt oppdaget, og brannvesenet klarte dermed å få kontroll på situasjonen innen en time. 
                            Grunnet en del røyk i nabobygget, ble beboere på Grand hotell og i leilighetene rundt evakuert. 
                            Heldigvis ble det ikke meldt om personskader i forbindelse med denne brannen.</p>
                        `,
                        
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
                markers.push(layer);

               
                layer.on('click', function () {
                    const content = `
                        <strong>${feature.properties.title}</strong><br>
                        ${feature.properties.description}
                        <img src="${feature.properties.img}" alt="${feature.properties.title}" style="width: 100%; height: auto; margin-top: 10px;">
                    `;
                    document.getElementById('sidebar').innerHTML = content;
                    document.getElementById('sidebar').classList.add('visible'); 
                });
            }
        }).addTo(map);

        setTimeout(function () {
            map.invalidateSize();
        }, 100);

        resolve({ map, geoJsonLayer, markers });
    });
}

window.onload = function () {
    initializeMap().catch((error) => {
        console.error('An error occurred while loading the map', error);
    });
};
