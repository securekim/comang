
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


function hardCodedStep(dongNumber) {

  if(dongNumber == 1){

  }else if (dongNumber ==2){

  }else if (dongNumber ==3){

  }

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


var signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
  backgroundColor: 'rgba(255, 255, 255, 0)',
  penColor: 'rgb(0, 0, 0)'
});
var saveButton = document.getElementById('save');
var cancelButton = document.getElementById('clear');

saveButton.addEventListener('click', function (event) {
  var data = signaturePad.toDataURL('image/png');

// Send data to server instead...
  window.open(data);
});

cancelButton.addEventListener('click', function (event) {
  signaturePad.clear();
});