
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
  `${'<div id="content" style="width:350px;"><div id="siteNotice"></div>' +
  '<h1 id="firstHeading" class="firstHeading">'}래미안 힐스테이트 <br>1단지 아파트</h1>` +
  '<div id="bodyContent" style="width:100%;">' +
  `<p><b>주소</b> 경기도 수원시 영통구 매탄1동 176 </br></br>` +
  `<p><b>등기번호</b> 0123912 </br></br>` +
  `<p><b>요청사항</b> 부재시 경비실에 맡겨주세요. </br></br>` +
  `<p><b>고객님 사인 :</b></br></br>`;
  
  }else if (dongNumber ==2){
    contents =
    `${'<div id="content" style="width:350px;"><div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">'}인계삼성아파트</h1>` +
    '<div id="bodyContent" style="width:100%;">' +
    `<p><b>주소</b> 경기도 수원시 팔달구 인계동 371-1 </br></br>` +
    `<p><b>등기번호</b> 1102304 </br></br>` +
    `<p><b>요청사항</b> 부재시 소화전에 넣어주세요. </br></br>` +
    `<p><b>고객님 사인 :</b></br></br>`;
  
  }else if (dongNumber ==3){
    `${'<div id="content" style="width:350px;"><div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">'}래미안노블클래스 1단지</h1>` +
    '<div id="bodyContent" style="width:100%;">' +
    `<p><b>주소</b> 경기도 수원시 팔달구 인계동 권광로 246 </br></br>` +
    `<p><b>등기번호</b> 2423911 </br></br>` +
    `<p><b>요청사항</b> 부재시 집 앞에 놔 주세요. </br></br>` +
    `<p><b>고객님 사인 :</b></br></br>`;
  
  }
  // 
  // 
  contents+= 
  '<div class="signature-pad--body" style="width:300px; height:160px; margin-left:25px;">'+
  '<img style="opacity:0.3;width:300px; height:150px" src="img/koreaPost.png" />'+
  '<canvas id="signature-pad_'+dongNumber+'" class="signature-pad" style="position:relative; top:-150px" onclick="initSignature('+dongNumber+')"></canvas>'+
  '</div>'+
  '<div>'+
  '<button id="save_'+dongNumber+'" style="width:100%" onclick="saveIt('+dongNumber+')" class="btn btn-primary btn-block">Save</button>' +
  '<button id="clear_'+dongNumber+'" style="width:100%" class="btn btn-danger btn-block">Clear</button>' +
  '</div>' +
  '<div class="container-fluid">' +
  '<div class="animated fadeIn">' +
  '<div class="row"">' +
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

      "localStorage.setItem('signature_'+"+number+", 'Tom')"+

      "window.open(data);"+
    "})");
    eval("cancelButton_"+number+".addEventListener('click', function (event) {"+
      "signaturePad_"+number+".clear();"+
    "})");
  }catch(e){
    //console.log(e);
  }
}


function saveIt(number){
  console.log(number);
  deliverYes();
}




var sha256 = function sha256(ascii) {
	function rightRotate(value, amount) {
		return (value>>>amount) | (value<<(32 - amount));
	};
	
	var mathPow = Math.pow;
	var maxWord = mathPow(2, 32);
	var lengthProperty = 'length'
	var i, j; // Used as a counter across the whole file
	var result = ''

	var words = [];
	var asciiBitLength = ascii[lengthProperty]*8;
	
	//* caching results is optional - remove/add slash from front of this line to toggle
	// Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
	// (we actually calculate the first 64, but extra values are just ignored)
	var hash = sha256.h = sha256.h || [];
	// Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
	var k = sha256.k = sha256.k || [];
	var primeCounter = k[lengthProperty];
	/*/
	var hash = [], k = [];
	var primeCounter = 0;
	//*/

	var isComposite = {};
	for (var candidate = 2; primeCounter < 64; candidate++) {
		if (!isComposite[candidate]) {
			for (i = 0; i < 313; i += candidate) {
				isComposite[i] = candidate;
			}
			hash[primeCounter] = (mathPow(candidate, .5)*maxWord)|0;
			k[primeCounter++] = (mathPow(candidate, 1/3)*maxWord)|0;
		}
	}
	
	ascii += '\x80' // Append Ƈ' bit (plus zero padding)
	while (ascii[lengthProperty]%64 - 56) ascii += '\x00' // More zero padding
	for (i = 0; i < ascii[lengthProperty]; i++) {
		j = ascii.charCodeAt(i);
		if (j>>8) return; // ASCII check: only accept characters in range 0-255
		words[i>>2] |= j << ((3 - i)%4)*8;
	}
	words[words[lengthProperty]] = ((asciiBitLength/maxWord)|0);
	words[words[lengthProperty]] = (asciiBitLength)
	
	// process each chunk
	for (j = 0; j < words[lengthProperty];) {
		var w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
		var oldHash = hash;
		// This is now the undefinedworking hash", often labelled as variables a...g
		// (we have to truncate as well, otherwise extra entries at the end accumulate
		hash = hash.slice(0, 8);
		
		for (i = 0; i < 64; i++) {
			var i2 = i + j;
			// Expand the message into 64 words
			// Used below if 
			var w15 = w[i - 15], w2 = w[i - 2];

			// Iterate
			var a = hash[0], e = hash[4];
			var temp1 = hash[7]
				+ (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
				+ ((e&hash[5])^((~e)&hash[6])) // ch
				+ k[i]
				// Expand the message schedule if needed
				+ (w[i] = (i < 16) ? w[i] : (
						w[i - 16]
						+ (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15>>>3)) // s0
						+ w[i - 7]
						+ (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2>>>10)) // s1
					)|0
				);
			// This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
			var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) // S0
				+ ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2])); // maj
			
			hash = [(temp1 + temp2)|0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
			hash[4] = (hash[4] + temp1)|0;
		}
		
		for (i = 0; i < 8; i++) {
			hash[i] = (hash[i] + oldHash[i])|0;
		}
	}
	
	for (i = 0; i < 8; i++) {
		for (j = 3; j + 1; j--) {
			var b = (hash[i]>>(j*8))&255;
			result += ((b < 16) ? 0 : '') + b.toString(16);
		}
	}
	return result;
};