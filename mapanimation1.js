const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];



	mapboxgl.accessToken = 'pk.eyJ1IjoiZmlyZWZseTEyMTkiLCJhIjoiY2xnZnc3aTN3MDB3eTNsbzU1Y284bXJkcCJ9.d9ZHN77TSFEPYdHKaeajGA';
    const map = new mapboxgl.Map({
        container: 'map', // container ID  
      style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
        center: [-71.104081, 42.365554], // starting position [lng, lat]
        zoom: 13 // starting zoom
    });

    const layerList = document.getElementById('menu');
    const inputs = layerList.getElementsByTagName('input');

    for (const input of inputs) {
        input.onclick = (layer) => {
            const layerId = layer.target.id;
            map.setStyle('mapbox://styles/mapbox/' + layerId);
        };
    }


let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);

let counter = 0;
function move() {

  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}

if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, busStops };
}
