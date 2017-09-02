var myMap = L.Wrld.map("map", config.MY_KEY, {
	center: [40.713, -74.006],
	zoom: 16
});

var marker = L.marker([40.713, -74.006])
			  .addTo(myMap);
			  marker.bindPopup('This is City Hall');

// var control = L.control().addTo(userMap);


	// myMap.locate({setView: true, maxZoom: 7});
	
	myMap.themes.setTheme(
		L.Wrld.themes.season.Summer,
	    L.Wrld.themes.time.Day,
		L.Wrld.themes.weather.Clear
		);


// var userMap = L.Wrld.map("userMap", config.MY_KEY);
var userMap = L.map("userMap");


// Find user's location via the geolocation API
function getLocation() {
	navigator.geolocation.getCurrentPosition(function(position) {
		var userSpot = [position.coords.latitude, position.coords.longitude];
		var marker1 = L.marker(userSpot).addTo(userMap);
		marker1.bindPopup("This is your current location: " + userSpot);

		userMap.setView(userSpot, 16); // Set map center
	});
}

// Add National Geographic tile layer to map
L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(userMap);

getLocation();