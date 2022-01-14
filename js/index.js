let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.3752, lng: 76.7821 },  // N = latitude, E = longitude.
    zoom: 8,
    mapTypeId: "setellite"
  });

  new google.maps.Marker({
      position: { lat: 30.3752, lng: 76.7821 },
      map :map,
      draggable: false,
      animation: google.maps.Animation.DROP,
    //   icon: "images/map.png"
  })

}