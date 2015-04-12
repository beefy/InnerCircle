var userlong = 60;
var userlat = 60;
var geolocate;

L.mapbox.accessToken = 'pk.eyJ1IjoibnNjaHVsdHoxNCIsImEiOiJUdXJTc0EwIn0.GDGkKBAERoUmL9RXrmP5bQ';
var map = L.mapbox.map('map', 'examples.h186knp8')
    .setView([userlong, userlat], 6);

var geoJson = [{
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [0, 0]
    },
    properties: {
        title: 'NaN',
        icon: {
            "iconUrl": "../images/logo.png",
            "iconSize": [0, 0],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -55],
            "className": "dot"
        },
        visibility: 'hidden',
        display: 'none'
    }
},
{
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [-77, 37.9]
    },
    properties: {
        title: 'Sandy',
        icon: {
            "iconUrl": "../images/logo.png",
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
              "iconUrl": "../images/logo.png",
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
              "iconUrl": "../images/logo.png",
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
          coordinates: [userlong, userlat]
      },
      properties: {
          title: 'user',
          icon: {
              "iconUrl": "../images/logo.png",
              "iconSize": [50, 50],
              "iconAnchor": [10, 10],
              "popupAnchor": [0, -55],
              "className": "dot"
          }
      }
  }];

var myLayer = L.mapbox.featureLayer().bindPopup('<div class="popup"><p>Hey, Bob</p><button class = "way pure-button">On my way</button><br/><button class = "here pure-button">Get over here!</button></div>').addTo(map);

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

        //var marker = e.layer;
        //marker.setIcon("../images/back.png");
        //marker.setmage
    });

    map.on('click', resetColors);
    myLayer.setGeoJSON(geoJson);