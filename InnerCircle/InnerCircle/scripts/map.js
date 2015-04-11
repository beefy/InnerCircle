
////var x = document.getElementById("demo");
//function getLocation() {
//    if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(showPosition, showError);
//    } else {
//        x.innerHTML = "Geolocation is not supported by this browser.";
//    }
//}
//function showPosition(position) {
//    lat = position.coords.latitude;
//    lon = position.coords.longitude;
//    latlon = new google.maps.LatLng(lat, lon)
//    mapholder = document.getElementById('mapholder')
//    //  
//    var myOptions = {
//        center: latlon, zoom: 14,
//        mapTypeId: google.maps.MapTypeId.ROADMAP,
//        mapTypeControl: false,
//        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
//    }

//    //bob's position
//    boblat = lat + 0.01;
//    boblon = lon + 0.01;
//    boblatlon = new google.maps.LatLng(boblat, boblon)

//    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
//    var user = new google.maps.Marker({ position: latlon, map: map, title: "You are here" });
//    var bob = new google.maps.Marker({ position: boblatlon, map: map, title: "Bob is here!" });


//    /*
//        MARKER FOR USER
//    */
//    var usermarker = new google.maps.Marker({
//        position: latlon,
//        map: map
//    });

//    var infowindow = new google.maps.InfoWindow({
//        content: "Me"
//    });

//    infowindow.open(usermarker.get('map'), usermarker);

//    //re-open if closed window
//    google.maps.event.addListener(usermarker, 'click', function () {
//        infowindow.open(usermarker.get('map'), usermarker);
//    });

//    /*
//        MARKER FOR BOB
//    */
//    var bobmarker = new google.maps.Marker({
//        position: boblatlon,
//        map: map
//    });

//    var infowindow = new google.maps.InfoWindow({
//        content: "Bob Testy"
//    });

//    infowindow.open(bobmarker.get('map'), bobmarker);

//    //re-open if closed window
//    google.maps.event.addListener(bobmarker, 'click', function () {
//        infowindow.open(bobmarker.get('map'), bobmarker);



//        bootbox.alert("Hello world!", function () {
//            Example.show("Hello world callback");
//        });


//    });
//}

//function showError(error) {
//    switch (error.code) {
//        case error.PERMISSION_DENIED:
//            console.log("User denied the request for Geolocation.");
//            break;
//        case error.POSITION_UNAVAILABLE:
//            console.log("Location information is unavailable.");
//            break;
//        case error.TIMEOUT:
//            console.log("The request to get user location timed out.");
//            break;
//        case error.UNKNOWN_ERROR:
//            console.log("An unknown error occurred.");
//            break;
//    }
//}

////FB.api('/me/events','post',{ 
////    name: 'TEST',
////    start_time: '2013-06-03T15:00:00-0700',
////    end_time:   '2013-06-03T19:00:00-0700',
////    description:'Birthday party',
////    location:'Mumbai',
////    privacy_type:"OPEN",

////},

L.mapbox.accessToken = 'pk.eyJ1IjoibnNjaHVsdHoxNCIsImEiOiJUdXJTc0EwIn0.GDGkKBAERoUmL9RXrmP5bQ';
var map = L.mapbox.map('map', 'examples.map-i86nkdio')
    .setView([38.91338, -77.03236], 16);

L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -77.03221142292,
          38.913371603574
        ]
    },
    properties: {
        title: 'Peregrine Espresso',
        description: '1718 14th St NW, Washington, DC',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#BE9A6B',
        'marker-symbol': 'cafe'
    }
}).addTo(map);