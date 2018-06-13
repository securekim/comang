
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
var contents;
  if(dongNumber == 1){

  contents =
  `${'<div id="content" style="width:100%;"><div id="siteNotice"></div>' +
  '<h1 id="firstHeading" class="firstHeading">'}매탄힐스테이트아파트</h1>` +
  '<div id="bodyContent" style="width:100%;">' +
  `<p><b>주소</b> 경기도 수원시 영통구 매탄1동 176 </br></br>` +
  `<p><b>등기번호</b> 0123912 </br></br>` +
  `<p><b>요청사항</b> 부재시 경비실에 맡겨주세요. </br></br>` +
  `<p><b>고객님 사인 :</b></br></br>`;
  
  }else if (dongNumber ==2){
    `${'<div id="content" style="width:100%;"><div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">'}인계삼성아파트</h1>` +
    '<div id="bodyContent" style="width:100%;">' +
    `<p><b>주소</b> 경기도 수원시 팔달구 인계동 371-1 </br></br>` +
    `<p><b>등기번호</b> 1102304 </br></br>` +
    `<p><b>요청사항</b> 부재시 소화전에 넣어주세요. </br></br>` +
    `<p><b>고객님 사인 :</b></br></br>`;
  
  }else if (dongNumber ==3){
    `${'<div id="content" style="width:100%;"><div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">'}래미안노블클래스 1단지</h1>` +
    '<div id="bodyContent" style="width:100%;">' +
    `<p><b>주소</b> 경기도 수원시 팔달구 인계동 권광로 246 </br></br>` +
    `<p><b>등기번호</b> 2423911 </br></br>` +
    `<p><b>요청사항</b> 부재시 집 앞에 놔 주세요. </br></br>` +
    `<p><b>고객님 사인 :</b></br></br>`;
  
  }
  // '<div class="container-fluid">' +
  // '<div class="row"">' +
  contents+='<div class="animated fadeIn">' +
  '<div class="wrapper">'+
  '<img style="opacity:0.3" src="img/koreaPost.png" width=400 height=200 />'+
  '<canvas id="signature-pad_'+dongNumber+'" class="signature-pad" width=400 height=200 onclick="initSignature('+dongNumber+')"></canvas>'+
  '</div>'+
  '<div>'+
  '<button id="save_'+dongNumber+'" class="btn btn-primary btn-block">Save</button>' +
  '<button id="clear_'+dongNumber+'" class="btn btn-danger btn-block">Clear</button>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>'

  initSignature(dongNumber);

  return contents;
}

var signaturePad_1="";
var signaturePad_2="";
var signaturePad_3="";
var saveButton_1="";
var saveButton_2="";
var saveButton_3="";
var cancelButton_1="";
var cancelButton_2="";
var cancelButton_3="";


function initSignature(number){
  try{  
    eval("var tmp=signaturePad_"+number);
    if(tmp!=="") return;
    eval("signaturePad_"+number+" = new SignaturePad(document.getElementById('signature-pad_"+number+"'), {"+
      "backgroundColor: 'rgba(255, 255, 255, 0)',"+
      "penColor: 'rgb(0, 0, 0)'"+
    "});");
    eval("saveButton_"+number+" = document.getElementById('save_"+number+"')");
    eval("cancelButton_"+number+" = document.getElementById('clear_"+number+"')");
    eval("saveButton_"+number+".addEventListener('click', function (event) {"+
      "var data = signaturePad_"+number+".toDataURL('image/png');"+
      "window.open(data);"+
    "})");
    eval("cancelButton_"+number+".addEventListener('click', function (event) {"+
      "signaturePad_"+number+".clear();"+
    "})");
  }catch(e){
    console.log(e);
  }
}
