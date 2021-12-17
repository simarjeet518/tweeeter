$(document).ready(function() {

 // text- area 
 const $newTweet = $("#tweet-text");                
 
 //update counter

 $newTweet.on('input', function () {
  let counter = Number($(this).siblings().children('.counter').val());
  counter = 140 - $(this).val().length;
  if(counter < 0) {

    $(this).siblings().children('.counter').css({"color": "red"})     
    } else {
    //error box is used for validation when input changes (1-140 chars) error box disappears

    $('.Error-box').addClass("hidden");    
    $(this).siblings().children('.counter').css({"color": "#545149"});

    }
    $(this).siblings().children('.counter').val(counter);

  });

  //function used to change styling when user scrolls down
  const changeLayout =(color,image,displayicon,displaybtn) =>{
    $("nav").css({"background-color":color});
    $("nav").css({"background-image":image});
    $(".new-tweet-icon").css({"display":displayicon});
    $("#scroll-up").css({"display":displaybtn});
  }

  $(document).scroll(function (){
    if($(window).scrollTop()>= 91){                      //when user scrolls down 
      changeLayout("transparent","none","none","block");  //nav color transparent ,no image on nav,nav compose button disappears,bottom button apears
    } else {
      changeLayout("#4056a1","url(/images/black-paper.png)","block","none");
    }
 });

 //when user click bottom scroll up button 
  $("#scroll-up").on('click',()=> {
  $("#tweet-text").focus();
  changeLayout("#4056a1","url(/images/black-paper.png)","block","none");
  $(window).scrollTop(0);
});

});

