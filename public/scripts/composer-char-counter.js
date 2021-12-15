$(document).ready(function() {

 const $newTweet = $("#tweet-text");              
 const $tweetButton = $("#submit-tweet");     
 
let keyCode ;
$newTweet.on('keydown',(e) => {
  keyCode = e.keyCode;
   
 });


$newTweet.on('input', function () {
  let counter = Number($(this).siblings().children('.counter').val());
  
  if(keyCode === 8 || keyCode === 46) {    //key code for delete and backspace
    counter += 1
  } else {
  counter -= 1
  }
  if(counter < 0) {
   $(this).siblings().children('.counter').css({"color": "red"})
   }
   $(this).siblings().children('.counter').val(counter);

 });


$tweetButton.on('click',function() {

 });


});

