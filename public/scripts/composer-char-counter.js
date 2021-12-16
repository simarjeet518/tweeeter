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

  $(document).scroll(function (){
    if($(window).scrollTop()>= 91){
      $("nav").css({"background-color":"transparent"});
      $(".new-tweet-icon").css({"display":"none"});
      $("#scroll-up").css({"display":"block"});
    } else {
      $("#scroll-up").css({"display":"none"});
      $("nav").css({"background-color":"#4056a1"});
      $(".new-tweet-icon").css({"display":"block"});
    }

   
  });
 $("#scroll-up").on('click',()=> {
  $("#tweet-text").focus();
  $("nav").css({"background-color":"#4056a1"});
  $(".new-tweet-icon").css({"display":"block"});
  $("#scroll-up").css({"display":"none"});
  $(window).scrollTop(0);
  

 })

});

