var map;



function initMap () {
    mapaGoogle = new google.maps.Map(document.getElementById('mapa'), {
        center: {lat: -16.512, lng: -71.123},
        zoom: 8,
        styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#242f3e"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#746855"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#242f3e"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#263c3f"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#00e100"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#6b9a76"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#38414e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#212a37"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9ca5b3"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#746855"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#1f2835"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#f3d19c"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#2f3948"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#17263c"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#83faeb"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#515c6d"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#17263c"
                }
              ]
            }
          ]
    });
}


initMap()

//colocar polyline
let tecsupPlaza = new google.maps.Polylne();
tecsupPlaza.setMap(mapaGoogle);
tecsupPlaza.setPath(

    [{	lat: -16.461161	,lon:	-71.523819	},
        {	lat: -16.45974	,	lon:-71.522369	},
        {	lat: -16.46044	,	lon:-71.521591	},
        {	lat: -16.46047	,	lon:-71.5215	},
        {	lat: -16.460421	,lon:	-71.52137	},
        {	lat: -16.45639	,	lon:-71.51741	},
        {	lat: -16.45583	,	lon:-71.518028	},
        {	lat: -16.455441	,lon:	-71.517761	},
        {	lat: -16.45483	,	lon:-71.51757	},
        {	lat: -16.451571	,lon:	-71.514442	},
        {	lat: -16.45126	,	lon:-71.514381	},
        {	lat: -16.45093	,	lon:-71.51461	},
        {	lat: -16.450331	,lon:	-71.51545	},
        {	lat: -16.45006	,	lon:-71.51561	},
        {	lat: -16.449881	,lon:	-71.51564	},
        {	lat: -16.44985	,	lon:-71.515732	},
        {	lat: -16.44795	,	lon:-71.51651	},
        {	lat: -16.44713	,	lon:-71.516411	},
        {	lat: -16.44721	,	lon:-71.516724	},
        {	lat: -16.44685	,	lon:-71.51767	},
        {	lat: -16.446541	,lon:	-71.518219	},
        {	lat: -16.44622	,	lon:-71.518631	},
        {	lat: -16.445021	,lon:	-71.51841	},
        {	lat: -16.444241	,lon:	-71.51812	},
        {	lat: -16.443741	,lon:	-71.51799	},
        {	lat: -16.44323	,	lon:-71.518753	},
        {	lat: -16.44319	,	lon:-71.51899	},
        {	lat: -16.443331	,lon:	-71.523033	},
        {	lat: -16.442341	,lon:	-71.52478	},
        {	lat: -16.44223	,	lon:-71.525093	},
        {	lat: -16.44084	,	lon:-71.525543	},
        {	lat: -16.44194	,	lon:-71.528923	},
        {	lat: -16.44101	,	lon:-71.529091	},
        {	lat: -16.43083	,	lon:-71.532761	},
        {	lat: -16.43066	,	lon:-71.53273	},
        {	lat: -16.43063	,	lon:-71.532669	},
        {	lat: -16.42725	,	lon:-71.532951	},
        {	lat: -16.42688	,	lon:-71.533043	},
        {	lat: -16.42565	,	lon:-71.533081	},
        {	lat: -16.42561	,	lon:-71.532982	},
        {	lat: -16.425461	,lon:	-71.532951	},
        {	lat: -16.42531	,	lon:-71.533043	},
        {	lat: -16.42528	,	lon:-71.533119	},
        {	lat: -16.42519	,	lon:-71.533073	},
        {	lat: -16.42462	,	lon:-71.53302	},
        {	lat: -16.4231	,	lon:71.531792	},
        {	lat: -16.4226	,	lon:71.531502	},
        {	lat: -16.421921	,lon:	-71.53125	},
        {	lat: -16.42082	,	lon:-71.531311	},
        {	lat: -16.418871	,lon:	-71.53196	},
        {	lat: -16.4172	,	lon:71.532631	},
        {	lat: -16.416491	,lon:	-71.533157	},
        {	lat: -16.41601	,	lon:-71.533607	},
        {	lat: -16.415569	,lon:	-71.533913	},
        {	lat: -16.41423	,	lon:-71.534538	},
        {	lat: -16.41106	,	lon:-71.535751	},
        {	lat: -16.40959	,	lon:-71.536522	},
        {	lat: -16.40943	,	lon:-71.53669	},
        {	lat: -16.40909	,	lon:-71.5373	},
        {	lat: -16.408291	,lon:	-71.538269	},
        {	lat: -16.4079	,	lon:71.538391	},
        {	lat: -16.407551	,lon:	-71.53862	},
        {	lat: -16.40675	,	lon:-71.539383	},
        {	lat: -16.405661	,lon:	-71.540154	},
        {	lat: -16.40539	,	lon:-71.540741	},
        {	lat: -16.40498	,	lon:-71.540894	},
        {	lat: -16.40427	,	lon:-71.540581	},
        {	lat: -16.4039	,	lon:71.540581	},
        {	lat: -16.403561	,lon:	-71.540459	},
        {	lat: -16.40341	,	lon:-71.540482	},
        {	lat: -16.403111	,lon:	-71.541161	},
        {	lat: -16.40435	,	lon:-71.542519	},
        {	lat: -16.40427	,	lon:-71.54274	},
        {	lat: -16.40428	,	lon:-71.542824	},
        {	lat: -16.4044	,	lon:71.542961	},
        {	lat: -16.40354	,	lon:-71.544884	},
        {	lat: -16.40358	,	lon:-71.545174	},
        {	lat: -16.40366	,	lon:-71.545303	},
        {	lat: -16.40423	,	lon:-71.5457	},
        {	lat: -16.404301	,lon:	-71.546021	},
        {	lat: -16.40424	,	lon:-71.546219	},
        {	lat: -16.404831	,lon:	-71.546532	},
        {	lat: -16.404255	,lon:	-71.54789	},
        {	lat: -16.40313	,	lon:-71.547501	},
        {	lat: -16.400311	,lon:	-71.546471	},
        {	lat: -16.39966	,	lon:-71.546371	},
        {	lat: -16.39604	,	lon:-71.544952	},
        {	lat: -16.39464	,	lon:-71.5476	},
        {	lat: -16.39518	,	lon:-71.548241	},
        {	lat: -16.39373	,	lon:-71.549004	},
        {	lat: -16.3932	,	lon:71.549103	},
        {	lat: -16.392891	, lon:	-71.549042	},
        {	lat: -16.38979	,	lon:-71.547592	}
    ]
)
// funcion para buscar una ciudad con open weathermap

let buscarCuidadPorNombre = async (nombre) => {

    let url = `api.openweathermap.org/data/2.5/weather?q=${nombre}&appid=a0f485a49eb1127e8769e955eb753c75`;
    let response = await fetch(url);
    let objJson = await response.json();
    return objJson;
}

let btnAgregarMarcador = document.getElementById("btnAgregarMarcador");

btnAgregarMarcador.onclick = () =>{

//Colocar marcador ne mapa google maps

var marker = new google.maps.Marker({position: {lat: -16.512, lng: -71.123}, map: mapaGoogle});


}



let formBusqueda = document.getElementById("formBusqueda");

let buscar = $("#inputbuscar").val();
formBusqueda.onsubmit = (event) =>{

    event.preventDefault();
    // $("#carga").removeAttr("hidden");
     $("#txtError").removeAttr("hidden");

    buscarCuidadPorNombre("Arequipa").then(rpta =>{
        // $("#carga").attr("hidden", "hidden");

        if(rpta.cod === 200){

            //el lugar existe y crear el marcador
            var position = new google.maps.Marker({position: {lat: rpta.coord.lat, lng: rpta.coord.lon}, map: mapaGoogle});
        }
        else{
            // el lugar no existe y moestra el mensaje de error
            $("#txtError").removeAttr("hidden")
        }
        console.log(rpta);
        
    })
}

let obtenerUbicacion = () =>{

    navigator.geolocation.getCurrentPosition((posicion) =>{
        console.log("El usuaraio me dio permiso");
    console.log(posicion);
            
    }, () =>{
        console.log(("El usuario no acpeto que accediarmos a su ubicacion"));
        
    })
}


obtenerUbicacion();