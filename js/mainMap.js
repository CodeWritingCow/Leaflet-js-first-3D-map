var mainMap = L.Wrld.map("map", config.MY_KEY, {
	center: [40.709138, -73.995889],
	zoom: 14.5,
	zoomControl: true // wrld.js appears to disable zoomControl by default
});

/* var marker = L.marker([40.713, -74.006]);
	marker.addTo(mainMap);
	marker.bindPopup('This is City Hall'); */

	// mainMap.locate({setView: true, maxZoom: 7});
	
mainMap.themes.setTheme(
	L.Wrld.themes.season.Summer,
    L.Wrld.themes.time.Day,
	L.Wrld.themes.weather.Clear
	);