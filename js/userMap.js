// Map tile layers
var CartoDB_DarkMatter = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
});

var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var NASAGIBS_ViirsEarthAtNight2012 = L.tileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
	attribution: 'NASA', // Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.
	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
	minZoom: 1,
	maxZoom: 8,
	format: 'jpg',
	time: '',
	tilematrixset: 'GoogleMapsCompatible_Level'
});

var baseMaps = {
	"CartoDB: Dark Matter": CartoDB_DarkMatter,
	"OpenStreetMap: Black and White": OpenStreetMap_BlackAndWhite,
	"NASA: Night": NASAGIBS_ViirsEarthAtNight2012
};

// Lat and lng coordinates
var worldCenter = [30, 31];

// Initialize map
var userMap = L.map("userMap", {
	center: worldCenter,
	zoom: 1,
	layers: [CartoDB_DarkMatter]
});

// Create layer for storing map markers
var markers = new L.LayerGroup();


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

// Map control lets user choose which tile layer to display
L.control.layers(baseMaps).addTo(userMap);

userMap.on('locationfound', onLocationFound);
userMap.on('locationerror', onLocationError);