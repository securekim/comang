let map
let myLat=37.27058
let myLng=127.036017
let markers

function initMap() {
  refleshSideBar()
  map = new google.maps.Map(document.getElementById('map'), {
    center: locationss[0],
    zoom: 16
  })


  //내위치 나타내기
  var myMarker = new google.maps.Marker({
    position: new google.maps.LatLng(locationss[10].lat, locationss[10].lng),
    map,
    draggable: false,
    icon: 'http://maps.google.com/mapfiles/ms/micons/man.png'
  })




  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var iconEnd = {
    url: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-512.png',
    scaledSize: new google.maps.Size(30, 30), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  }
  var icon = {
    url: 'https://cdn3.iconfinder.com/data/icons/iconic-1/32/check_alt-512.png',
    scaledSize: new google.maps.Size(30, 30), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  }

  // 마커들 등록
  for(var i = 0 ; i < locationss.length ; i++){
    var marker = null
    if(i >= 9){
      marker = new google.maps.Marker({
        position: locationss[i],
        icon: icon,
        map:map
      })
    }else {
      marker = new google.maps.Marker({
        position: locationss[i],
        icon: iconEnd,
        map:map
      })
    }

    var infowindow = new google.maps.InfoWindow()

    var content = hardCodedStep(1, marker);

    google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
      return function() {
        infowindow.setContent(content)
        infowindow.open(map,marker)
      }
    })(marker,content,infowindow))



  }


  //마커들 등록
  markers = locationss.map((location, i) => {
     var marker = new google.maps.Marker({
       position: location,
       icon: icon
    })

    return marker
  })

  var flightPath = new google.maps.Polyline({
    path: loads,
    geodesic: true,
    strokeColor: '#f86c6b',
    strokeOpacity: 1.0,
    strokeWeight: 5
  })

  flightPath.setMap(map);


  var endLocation = new google.maps.Polyline({
    path: endLocations,
    geodesic: true,
    strokeColor: '#4dbd74',
    strokeOpacity: 1.0,
    strokeWeight: 5
  })

  endLocation.setMap(map);
}


function deliverYes(marker) {
  //마커 이미지를바꿔줘

  marker
}
