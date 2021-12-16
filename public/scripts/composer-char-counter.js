$(document).ready(function() {

 const $newTweet = $("#tweet-text");                
 
 $newTweet.on('input', function () {
  let counter = Number($(this).siblings().children('.counter').val());
  counter = 140 - $(this).val().length;
  if(counter < 0) {

    $(this).siblings().children('.counter').css({"color": "red"})
    } else {
    $('.Error-box').addClass("hidden");
    $(this).siblings().children('.counter').css({"color": "#545149"});
    }
    $(this).siblings().children('.counter').val(counter);

  });

  const changeLayout =(color,image,displayicon,displaybtn) =>{
    $("nav").css({"background-color":color});
    $("nav").css({"background-image":image});
    $(".new-tweet-icon").css({"display":displayicon});
    $("#scroll-up").css({"display":displaybtn});
  }

  $(document).scroll(function (){
    if($(window).scrollTop()>= 91){
      changeLayout("transparent","none","none","block");
      } else {
      changeLayout("#4056a1","url(/images/black-paper.png)","block","none");
      }
 });

  $("#scroll-up").on('click',()=> {
  $("#tweet-text").focus();
  changeLayout("#4056a1","url(/images/black-paper.png)","block","none");
  $(window).scrollTop(0);
});

});

