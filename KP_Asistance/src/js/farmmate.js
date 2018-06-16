let map
let myLat=37.27058
let myLng=127.036017
let markers
let index = 0
function initMap() {
  refleshSideBar()
  map = new google.maps.Map(document.getElementById('map'), {
    center: locationss[9],
    zoom: 17
  })


function walkingSmoothly(latLng){
  myMarker.setPosition(latLng);
}


  var labels = '2시간 15분 전';


  var iconEnd = {
    url: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-512.png',
    scaledSize: new google.maps.Size(30, 30), // scaled size
    labelOrigin:  new google.maps.Point(10,0),
  }
  var icon = {
    url: 'https://cdn3.iconfinder.com/data/icons/iconic-1/32/check_alt-512.png',
    scaledSize: new google.maps.Size(30, 30), // scaled size
    origin: new google.maps.Point(0, 0),
    labelOrigin:  new google.maps.Point(15,-5),
  }

  // 마커들 등록
  for(var i = 0 ; i < locationss.length ; i++){
    var marker = null
    if(i >= 13+index){
      marker = new google.maps.Marker({
        position: locationss[i],
        icon: icon,
        map:map,
        label: {
          text: labelText[i-13-index],
          color: 'black',
          fontSize: '15px',
          fontWeight: "bold"
        }
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
        document.getElementById('content').parentElement.style="overflow:hidden;"
      }
    })(marker,content,infowindow))



  }


  var iconMy = {
    url: 'img/brand/truck.png',
    scaledSize: new google.maps.Size(80, 50), // scaled size
  }
  //내위치 나타내기
  var myMarker = new google.maps.Marker({
    position: new google.maps.LatLng(locationss[12].lat, locationss[12].lng),
    map,
    draggable: false,
    icon: iconMy
  })

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


function deliverYes() {
  //마커 이미지를바꿔줘
  index+=1
  initMap()
}
