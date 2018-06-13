
function makeContents(contentId, pLat, pLng, marker) {
  getadress(contentId, pLat, pLng, marker)
}

function getadress(contentId, pLat, pLng, marker) {
  const latlng = {
    lat: pLat,
    lng: pLng
  }
  let adress = '' // (1) Sets address as empty.

  geocoder.geocode({
    latLng: latlng
  },
  (results, status) => {
    adress = results[1].formatted_address
    nextStep(contentId, adress, marker)
  })
}

function nextStep(contentId, address, marker) {

  console.log(contentId)
  console.log(address)

  const contents =
    `${'<div id="content" style="width:550px;"><div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">'}${markerinfo[contentId].name}</h1>` +
    '<div id="bodyContent" style="width:100%;">' +
    `<p><b>주소</b> ${address} </br></br>` +
    '<div class="container-fluid">' +
    '<div class="animated fadeIn">' +
    '<div class="row"">' +
    '</div>' +
    '</div>' +
    '</div>'
  const infowindow = new google.maps.InfoWindow({
    content: contents,
    maxWidth: 1000
  })

  infowindow.open(map, marker)
}
