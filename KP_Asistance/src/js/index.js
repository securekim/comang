// JS only for the switch
$(function(){
  $("#switch-view").click(function(){
    $(this).find("button").toggleClass("active");
    $(".article-wrapper").toggleClass("bloc col-xs-12 col-xs-4");
  });
});

add();

function add(){
  myrow = document.getElementById('row');
  console.log(myrow);
  content =
   '<div class="col-xs-12 article-wrapper">'+
       '<article>'+
         '<a href="#" class="more">more</a>'+
         '<div class="img-wrapper" style="margin-left: 20px; margin-top: 35px;"><img src="'+localStorage.getItem("signature_1")+'" alt="" /></div>'+
         '<h1>래미안 힐스테이트 1단지</h1>'+
         '<p><b>주소</b> 경기도 수원시 영통구 매탄1동 176'+
       '</article>'+
   '</div>'
   myrow.innerHTML+=content;

}