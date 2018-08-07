const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZHVzdGluaGVlc3RhbmQiLCJhIjoiY2prazNyYnkyMW1pdDN3cDl0ZWhmYmg4dyJ9.dN3sVcrZjlHJSRVdyjavQw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

new mapboxgl.Marker('#map').setLngLat(map.center).addTo(map);

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-87.6354, 41.8885]).addTo(map);
