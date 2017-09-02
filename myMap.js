var worldCenter = [30, 31];

var mainMap = L.Wrld.map("map", config.MY_KEY, {
	center: [40.713, -74.006],
	zoom: 16
});

var marker = L.marker([40.713, -74.006]);
	marker.addTo(mainMap);
	marker.bindPopup('This is City Hall');

	// mainMap.locate({setView: true, maxZoom: 7});
	
	mainMap.themes.setTheme(
		L.Wrld.themes.season.Summer,
	    L.Wrld.themes.time.Day,
		L.Wrld.themes.weather.Clear
		);

var userMap = L.map("userMap");
	userMap.setView(worldCenter, 1);
	// userMap.locate({setView: true, maxZoom: 1});


// Find user's location via the geolocation API
function getLocation() {
	navigator.geolocation.getCurrentPosition(function(position) {
		var userSpot = [position.coords.latitude, position.coords.longitude];
		console.log(userSpot);
		var marker1 = L.marker(userSpot).addTo(userMap);
		marker1.bindPopup("This is your current location: " + userSpot);
		// userMap.setView(userSpot, 16); // Set map center
	});
}

// Add National Geographic tile layer to map
/* L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(userMap);*/

// Add NASA night tile layer to map
L.tileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
	attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
	minZoom: 1,
	maxZoom: 8,
	format: 'jpg',
	time: '',
	tilematrixset: 'GoogleMapsCompatible_Level'
}).addTo(userMap);

getLocation();