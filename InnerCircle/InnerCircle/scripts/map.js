L.mapbox.accessToken = 'pk.eyJ1IjoibnNjaHVsdHoxNCIsImEiOiJUdXJTc0EwIn0.GDGkKBAERoUmL9RXrmP5bQ';

var map = L.mapbox.map('mapholder', 'examples.map-i86nkdio')
    .setView([38.91338, -77.03236], 13);

//user
var user = L.mapbox.featureLayer({
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
        'marker-color': '#556EFA',
        'marker-symbol': 'circle-stroked'
    }

}).addTo(map);

//var bob = L.mapbox.featureLayer({
//    // this feature is in the GeoJSON format: see geojson.org
//    // for the full specification
//    type: 'Feature',
//    geometry: {
//        type: 'Point',
//        // coordinates here are in longitude, latitude order because
//        // x, y is the standard for GeoJSON and many formats
//        coordinates: [
//          -77.04221142292,
//          38.923371603574
//        ]
//    },
//    properties: {
//        title: 'Peregrine Espresso',
//        description: '1718 14th St NW, Washington, DC',
//        // one can customize markers by adding simplestyle properties
//        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
//        'marker-size': 'large',
//        'marker-color': '#E87E38',
//        'marker-symbol': 'circle-stroked'
//    }

//}).addTo(map);

//var sam = L.mapbox.featureLayer({
//    // this feature is in the GeoJSON format: see geojson.org
//    // for the full specification
//    type: 'Feature',
//    geometry: {
//        type: 'Point',
//        // coordinates here are in longitude, latitude order because
//        // x, y is the standard for GeoJSON and many formats
//        coordinates: [
//          -77.04721142292,
//          38.913371603574
//        ]
//    },
//    properties: {
//        title: 'Peregrine Espresso',
//        description: '1718 14th St NW, Washington, DC',
//        // one can customize markers by adding simplestyle properties
//        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
//        'marker-size': 'large',
//        'marker-color': '#E87E38',
//        'marker-symbol': 'circle-stroked'
//    }

//}).addTo(map);

//var sandy = L.mapbox.featureLayer({
//    // this feature is in the GeoJSON format: see geojson.org
//    // for the full specification
//    type: 'Feature',
//    geometry: {
//        type: 'Point',
//        // coordinates here are in longitude, latitude order because
//        // x, y is the standard for GeoJSON and many formats
//        coordinates: [
//          -77.04,
//          38.973371603574
//        ]
//    },
//    properties: {
//        title: 'Peregrine Espresso',
//        description: '1718 14th St NW, Washington, DC',
//        // one can customize markers by adding simplestyle properties
//        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
//        'marker-size': 'large',
//        'marker-color': '#E87E38',
//        'marker-symbol': 'circle-stroked'
//    }

//}).addTo(map);

var geoJson = [{
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [-77, 37.9]
    },
    properties: {
        title: 'Bob',
        'marker-size': 'large',
        'marker-color': '#E87E38',
        'marker-symbol': 'circle-stroked'
    }
},
  {
      type: 'Feature',
      geometry: {
          type: 'Point',
          coordinates: [-77.04721142292, 38.913371603574]
      },
      properties: {
          title: 'Mark',
          'marker-size': 'large',
          'marker-color': '#E87E38',
          'marker-symbol': 'circle-stroked'
      }
  },
  {
      type: 'Feature',
      geometry: {
          type: 'Point',
          coordinates: [-77.04, 38.973371603574]
      },
      properties: {
          title: 'Sandy',
          'marker-size': 'large',
          'marker-color': '#E87E38',
          'marker-symbol': 'circle-stroked'
      }
  }

];

var myLayer = L.mapbox.featureLayer().addTo(map);

myLayer.setGeoJSON(geoJson);

function resetMarkers() {
    for (var i = 0; i < geoJson.length; i++) {
        geoJson[i].properties['marker-color'] = geoJson[i].properties['old-color'] ||
            geoJson[i].properties['marker-color'];

       // geoJson[i].properties['marker-symbol'] = geoJson[i].properties['old-symbol'] ||
        //    geoJson[i].properties['marker-symbol'];
    }
    myLayer.setGeoJSON(geoJson);
}

myLayer.on('click', function (e) {
    resetMarkers();
    e.layer.feature.properties['old-color'] = e.layer.feature.properties['marker-color'];
    //e.layer.feature.properties['old-symbol'] = e.layer.feature.properties['marker-symbol'];
    e.layer.feature.properties['marker-color'] = '#ff8888';
    //e.layer.feature.properties['marker-symbol'] = 'circle';
    myLayer.setGeoJSON(geoJson);
});

myLayer.on('click', resetMarkers);

//L.mapbox.toggle(map.zoomControl, this);

//map.getContainer().querySelector('#zoomer').onclick = function () {
//    toggle(map.zoomControl, this);
//    return false;
//};