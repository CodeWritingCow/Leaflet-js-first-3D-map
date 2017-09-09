var mainMap = L.Wrld.map("map", config.MY_KEY, {
	center: [40.709138, -73.995889],
	zoom: 14.5,
	zoomControl: true, // wrld.js appears to disable zoomControl by default
	indoorsEnabled: true // Allows users to access indoor maps. Entrance markers appear on world map.
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


function onIndoorMapEntered(event) {        
var latLng = mainMap.getCenter();        
var indoorMapId = event.indoorMap.getIndoorMapId();
var buildingName = event.indoorMap.getIndoorMapName();

var popupOptions = { 
  indoorMapId: indoorMapId, 
  indoorMapFloorIndex: 0, 
  autoClose: false, 
  closeOnClick: false 
};

var popup = L.popup(popupOptions)
  .setLatLng(latLng)
  .addTo(mainMap)
  .setContent(buildingName);

mainMap.on("popupclose", function() { mainMap.indoors.exit(); });
}

mainMap.indoors.on("indoormapenter", onIndoorMapEntered);