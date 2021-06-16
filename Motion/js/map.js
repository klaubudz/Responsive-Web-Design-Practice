function initMap() {
	// The location
	var wawel = {lat: 50.054, lng: 19.935};
	var center = {lat: 50.059, lng: 19.935};

	// The map
	var map = new google.maps.Map(
	  document.getElementById('map'), {zoom: 14, center: center}
	);

	// The marker
	var marker = new google.maps.Marker({
		position: wawel, 
		map: map,
	});
}