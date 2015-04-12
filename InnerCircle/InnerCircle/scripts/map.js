﻿L.mapbox.accessToken = 'pk.eyJ1IjoibnNjaHVsdHoxNCIsImEiOiJUdXJTc0EwIn0.GDGkKBAERoUmL9RXrmP5bQ';
var map = L.mapbox.map('map', 'examples.h186knp8')
    .setView([37.9, -77], 6);

var geoJson = [{
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [-77, 37.9]
    },
    properties: {
        title: 'Sandy',
        'marker-size': 'large',
        'marker-color': '#E87E38',
        'marker-symbol': 'circle-stroked'
    }
},
  {
      type: 'Feature',
      geometry: {
          type: 'Point',
          coordinates: [-78, 36.5]
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
          coordinates: [-80, 36.5]
      },
      properties: {
          title: 'Albert',
          'marker-size': 'large',
          'marker-color': '#E87E38',
          'marker-symbol': 'circle-stroked'
      }
  },
  {
      type: 'Feature',
      geometry: {
          type: 'Point',
          coordinates: [-78, 33]
      },
      properties: {
          title: 'user',
          'marker-size': 'large',
          'marker-color': '#556EFA',
          'marker-symbol': 'circle-stroked'
      }
  }];

var myLayer = L.mapbox.featureLayer().bindPopup('<button class = "fb" >On My Way</button><button class = "sb" >Get Over Here</button>').addTo(map);

myLayer.setGeoJSON(geoJson);

function resetColors() {
    for (var i = 0; i < geoJson.length; i++) {
        geoJson[i].properties['marker-symbol'] = geoJson[i].properties['old-symbol'] ||
            geoJson[i].properties['marker-symbol'];
    }
    myLayer.setGeoJSON(geoJson);
}

myLayer.on('click', function (e) {
    resetColors();
    e.layer.feature.properties['old-symbol'] = e.layer.feature.properties['marker-symbol'];
    e.layer.feature.properties['marker-symbol'] = 'circle';
    myLayer.setGeoJSON(geoJson);
});

map.on('click', resetColors);