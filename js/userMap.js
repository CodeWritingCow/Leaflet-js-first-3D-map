var worldCenter = [30, 31];

var userMap = L.map("userMap");
	userMap.setView(worldCenter, 1);

var markers = new L.LayerGroup();

// Add NASA night tile layer to map
L.tileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
	attribution: 'NASA',
	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
	minZoom: 1,
	maxZoom: 8,
	format: 'jpg',
	time: '',
	tilematrixset: 'GoogleMapsCompatible_Level'
}).addTo(userMap);


// Find user's geolocation using Leaflet's locate method
function findLocation() {
	userMap.locate({setView: true, maxZoom: 5});
}

// If Leaflet finds user's geolocation, set marker there
function onLocationFound(e) {
    L.marker(e.latlng).addTo(markers);
    markers.addTo(userMap);
}

// Reset map zoom to 1, and reset center to worldCenter coordinates. Remove marker.
function resetLocation() {
	markers.clearLayers();
	userMap.flyTo(worldCenter, 1);
}

// If Leaflet fails to find user's geolocation, show error message.
function onLocationError(e) {
    alert(e.message);
    userMap.flyTo(worldCenter, 1); // Set map center to worldCenter coordinates.
}

userMap.on('locationfound', onLocationFound);
userMap.on('locationerror', onLocationError);