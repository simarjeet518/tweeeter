
$(document).ready(function () {
  let visible =true;
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
   
  }; 

  $("#click-new").on('click',(event)=> {
   if(visible){
   $("form").hide();
   visible =false;
    } else {
      $("form").show();
      $("#tweet-text").focus();
      visible=true;
  }
  });

 
  const createTweetElement = (tweetObj) => {

    return `<article class="tweets" id="tweets">
              <header>
                <div id="user-avatar">
                  <img src=${tweetObj.user.avatars} /> 
                  <span>${tweetObj.user.name} </span>
                </div>
                <span>${tweetObj.user.handle}</span>
              </header>
              <p>${escape(tweetObj.content.text)} </p>
              <footer>
                <span>${timeago.format(tweetObj.created_at)}</span>
                <div class="icons">
                  <i class="fas fa-flag"></i>
                  <i class="fas fa-retweet"></i>
                  <i class="fas fa-heart"></i>
                </div>
              </footer>
          </article>`
  }
 
 

  const renderTweets = (tweets) => {
    $("#display-tweets-conatiner").empty();
    let numberofTweets = tweets.length -1;
    for (let i=numberofTweets; i>=0; i--) {
      $("#display-tweets-conatiner").append(createTweetElement(tweets[i]));
    }
 
  }

  const loadTweets =  ( ) => {
    
    $.ajax({
    url: '/tweets',
    method: 'get'
  })
    .then((response) => {
      renderTweets(response); 
      
    })
    .catch((error) => {
      return error;
    })
    
   
  }

  const formValidation =() =>{
    const $tweet = $("#tweet-text").val();
    let error = "";
    if($tweet === ""|| $tweet === null) {
      error ="⚠️ you cannot submit empty form ,Please Enter something to tweet ⚠️"
      $( "form" ).prepend( `<p class ="Error-box  hidden">${error}</p>` );
      $('.Error-box').removeClass("hidden");
      return false;
    } 
    if($tweet.length >140 ){
      error ="⚠️ Too Long ,please Respect 140 chars limit ⚠️"
      $( "form" ).prepend( `<p class ="Error-box hidden">${error}</p>` );
      $('.Error-box').removeClass("hidden");
      return false;
    }
    return true;
   } 
 
  
  $("form").on('submit', function (event) {
     
    event.preventDefault();
    const result = formValidation();
   if(result) {
    const formData = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: formData,
    //  dataType : "html",
      success: function () {
        loadTweets();
        $('#tweet-text').val('');
        $('.counter').val("140");
      },
    })
  }  else {
    
    $(this).children().focus();
  }
   });
  
loadTweets();
  
 

});




