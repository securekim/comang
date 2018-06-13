

function refleshSideBar() {

  //아파트 개수 확인
  var size = markerinfo.length
  var sidebar = '';
  //아파트 개수만큼 돌려썅
  for(var i = 0; i<size;i++){
    sidebar = sidebar
      +'<li class="nav-item nav-dropdown">'+
      '<a class="nav-link nav-dropdown-toggle" href="#">'+
      '<i class="nav-icon"></i> '+markerinfo[i].aptname+'</a>'+
      '<ul class="nav-dropdown-items">'

    var sizeApt = markerinfo[i].componet.length
    for(var k = 0; k<sizeApt;k++){
      sidebar = sidebar
        +'<li class="nav-item">'+
        '<a class="nav-link">'+
        '<i class="nav-icon icon-cursor"></i>'+markerinfo[i].componet[k].detail_address+'</a>'+
        '</li>'
    }

    sidebar = sidebar+'</ul></li>'
  }
  document.getElementById("sidebarItemNav").innerHTML = sidebar
}
