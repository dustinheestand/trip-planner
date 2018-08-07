const mapboxgl = require('mapbox-gl');

function activity(lng, lat, map) {
  return marker('a', lng, lat, map);
}

function hotel(lng, lat, map) {
  return marker('h', lng, lat, map);
}

function restaurant(lng, lat, map) {
  return marker('r', lng, lat, map);
}

let activityArr = [];
let hotelArr = [];
let restaurantArr = [];

function marker(type, lng, lat, map) {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';

  if (type === 'a') {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
    activityArr.push()
  } else if (type === 'h') {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
  } else {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
  }

  new mapboxgl.Marker(markerDomEl, { offset: [-3, -9] })
    .setLngLat([lng, lat])
    .addTo(map);
}

module.exports = { activity, hotel, restaurant };
