var worldCenter = [30, 31];
var userSpot = [0 ,0];

var userMap = L.map("userMap");
	// userMap.setView(worldCenter, 1);
	

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


// Find user's location using Leaflet's locate method with the setView option
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(userMap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(userMap);
}

// If Leaflet fails to find user's geolocation, show error message.
// Set map center to worldCenter coordinates.
function onLocationError(e) {
    alert(e.message);
    userMap.setView(worldCenter, 1);
}

userMap.on('locationfound', onLocationFound);
userMap.on('locationerror', onLocationError);

userMap.locate({setView: true, maxZoom: 1});