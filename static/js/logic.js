// Fetch earthquake data from your JSON URL
const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'
d3.json(url).then(data => {
    createMap(data.features);
  });

// Function to create the map and add markers
function createMap(earthquakeData) {
  const map = L.map('map').setView([0, 0], 2); // Set initial view

  // Add tile layer 
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Function to set marker size and color based on magnitude and depth
  function getMarkerOptions(magnitude, depth) {
    return {
      radius: magnitude * 5,
      fillColor: getColor(depth),
      color: '#000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
  }

  // Function to get color based on depth
  function getColor(depth) {
      const colorScale = d3.scaleLinear().domain([0, 100, 200, 300, 500])
      .range(['green','yellow','orange','red', 'violet']);
    return colorScale(depth);
  }

  // Loop through earthquake data and add markers to the map
  earthquakeData.forEach(earthquake => {
    const { mag, place } = earthquake.properties;
    const { coordinates } = earthquake.geometry;
    const [longitude, latitude, depth] = coordinates;

    const markerOptions = getMarkerOptions(mag, depth);
    const marker = L.circleMarker([latitude, longitude], markerOptions);

    
    const popupContent = `
        <strong>Location:</strong> ${place}<br>
        <strong>Magnitude:</strong> ${mag}<br>
        <strong>Depth:</strong> ${depth}<br>`;

    marker.addTo(map).bindPopup(`Magnitude: ${mag}<br>Depth: ${depth}<br>Location: ${place}`);
  });
  
  // Create a legend and add it to the map
  const legend = L.control({ position: 'bottomright' });
  legend.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'info legend');
    const depthRanges = [0, 100, 200, 300, 500];
    
    div.innerHTML += '<strong>Depth Legend</strong><br>';
  
    for (let i = 0; i < depthRanges.length; i++) {
      const color = getColor(depthRanges[i] + 1);
      const colorStyle = `background: ${color}; width: 15px; height: 15px; display: inline-block; margin-right: 5px;`;
      
      div.innerHTML +=
          `<div>
             <div style="${colorStyle}"></div> 
             ${depthRanges[i]}${depthRanges[i + 1] ? '&ndash;' + depthRanges[i + 1] : '+'}
           </div>`;
    }
  
    return div;
  };
  legend.addTo(map);

}

