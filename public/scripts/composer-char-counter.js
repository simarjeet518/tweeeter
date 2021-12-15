$(document).ready(function() {

 const $newTweet = $("#tweet-text");              
 const $tweetButton = $("#submit-tweet");
 const $counter =$("output");      
 
let keyCode ;
  $newTweet.on('keydown',(e) => {
  keyCode = e.keyCode;
   
 });


$newTweet.on('input', function () {
  let counter = Number($counter.val());
  
  if(keyCode === 8) {
    counter += 1
  } else {
  counter -= 1
  }

  if(counter >135) {
   // $counter.css({"color": "red"}
   $(this).siblings().children('.counter').css({"color": "red"})
   //$(this).siblings().children('.counter').val(120);
  }

  $counter.val(counter);

 });


$tweetButton.on('click',function() {

 });


});