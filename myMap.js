var myMap = L.Wrld.map("map", config.MY_KEY, {
	center: [40.713, -74.006],
	zoom: 16
});
var marker = L.marker([40.713, -74.006]).addTo(myMap);
	// myMap.locate({setView: true, maxZoom: 7});
	
	myMap.themes.setTheme(
		L.Wrld.themes.season.Summer,
	    L.Wrld.themes.time.Day,
		L.Wrld.themes.weather.Clear
		);