var worldCenter = [30, 31];

var userMap = L.map("userMap");
	userMap.setView(worldCenter, 1);

var markers = new L.LayerGroup();

// Add CartoDB dark tile layer to map
L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd'
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