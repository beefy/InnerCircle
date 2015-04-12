L.mapbox.accessToken = 'pk.eyJ1IjoibnNjaHVsdHoxNCIsImEiOiJUdXJTc0EwIn0.GDGkKBAERoUmL9RXrmP5bQ';
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
        icon: {
            "iconUrl": "../images/back.png",
            "iconSize": [25, 25],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -55],
            "className": "dot"
        }
    }
},
  {
      type: 'Feature',
      geometry: {
          type: 'Point',
          coordinates: [-78, 36.5]
      },
      "properties": {
          title: 'Bob',
          icon: {
              "iconUrl": "../images/back.png",
              "iconSize": [25, 25],
              "iconAnchor": [10, 10],
              "popupAnchor": [0, -55],
              "className": "dot"
          }
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
          icon: {
              "iconUrl": "../images/back.png",
              "iconSize": [25, 25],
              "iconAnchor": [10, 10],
              "popupAnchor": [0, -55],
              "className": "dot"
          }
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
          icon: {
              "iconUrl": "../images/back.png",
              "iconSize": [25, 25],
              "iconAnchor": [10, 10],
              "popupAnchor": [0, -55],
              "className": "dot"
          }
      }
  }];

var myLayer = L.mapbox.featureLayer().addTo(map);

myLayer.setGeoJSON(geoJson);

function resetColors() {
    for (var i = 0; i < geoJson.length; i++) {
        geoJson[i].properties['marker-symbol'] = geoJson[i].properties['old-symbol'] ||
            geoJson[i].properties['marker-symbol'];
    }
    myLayer.setGeoJSON(geoJson);
}

myLayer.on('layeradd', function (e) {
    var marker = e.layer,
        feature = marker.feature;
    marker.setIcon(L.icon(feature.properties.icon));
});

myLayer.on('click', function (e) {
    resetColors();
    e.layer.feature.properties['old-symbol'] = e.layer.feature.properties['marker-symbol'];
    e.layer.feature.properties['marker-symbol'] = 'circle';
    myLayer.setGeoJSON(geoJson);
    map.panTo(e.layer.getLatLng());
});


map.on('click', resetColors);
myLayer.setGeoJSON(geoJson);