
var poly;
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 7,
    center: {lat: -16.512, lng: -71.123} 
  });

  poly = new google.maps.Polyline({
    strokeColor: '#ff0000',
    strokeOpacity: 1,
    strokeWeight: 2
  });
  poly.setMap(map);

  map.addListener('click', addLatLng);
}

function addLatLng(event) {
  var path = poly.getPath();

  path.push(event.latLng);

   var marker = new google.maps.Marker({
    position: event.latLng,
    map: map
  });
}



var mymap = L.map('mapid').setView([51.505, -0.09], 13);
