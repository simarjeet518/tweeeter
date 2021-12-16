$(document).ready(function() {

 const $newTweet = $("#tweet-text");                
 
 $newTweet.on('input', function () {
  let counter = Number($(this).siblings().children('.counter').val());
  counter = 140 - $(this).val().length;
  if(counter < 0) {
    $(this).siblings().children('.counter').css({"color": "red"})
    } else {
    $(this).siblings().children('.counter').css({"color": "#545149"});
    }
    $(this).siblings().children('.counter').val(counter);

  });


});

