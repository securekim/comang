let map
let myLat=37.27058
let myLng=127.036017
let markers

function initMap() {
  refleshSideBar()
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat:myLat,
      lng:myLng
    },
    zoom: 16
  })
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  //내위치 나타내기
  new google.maps.Marker({
    position: new google.maps.LatLng(myLat, myLng),
    map,
    draggable: false,
    icon: 'http://maps.google.com/mapfiles/ms/micons/man.png'
  })


  //마커들 등록
  markers = locationss.map((location, i) => {
     var marker = new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    })

    google.maps.event.addListener(marker, 'click', (evt) => {
      infowindow.open(map, marker)
    })

    var contentString =hardCodedStep(1);

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    })

    return marker
  })




  var markerCluster = new MarkerClusterer(map, markers,
    {
      imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    })
}
