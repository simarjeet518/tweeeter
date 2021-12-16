
$(document).ready(function () {
 
  const createTweetElement = (tweetObj) => {

    return `<article class="tweets" id="tweets">
              <header>
                <div id="user-avatar">
                  <img src=${tweetObj.user.avatars} /> 
                  <span>${tweetObj.user.name} </span>
                </div>
                <span>${tweetObj.user.handle}</span>
              </header>
              <p>${tweetObj.content.text} </p>
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
    for (let tweet of tweets) {
      $("#display-tweets-conatiner").append(createTweetElement(tweet));
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
    if($tweet === ""|| $tweet === null) {
        alert("Form should not be empty");
      
       return false;
    } 
    if($tweet.length >140 ){
      alert("tweet should not be more than 140 characters");
      return false;
    }
    return true;
   } 
 

  $("form").on('submit', function (event) {
     
    event.preventDefault();
    const result = formValidation();
   if(result) {
     console.log("inside agex",result);
    const formData = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: formData,
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




