
$(document).ready(function() {
  let visible = true;     // variable is used when user click compose button on nav

  //function for XSS
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
   
  };

  //compose button on nav on click form visibility changes
  $("#click-new").on('click',(event)=> {
    if (visible) {
      $("form").hide();
      visible = false;
    } else {
      $("form").show();
      $("#tweet-text").focus();
      visible = true;
    }
  });

 //create new article tag (new tweets)
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
          </article>`;
  };
 
 
// render tweets backwards as new tweet at top ,data stores opposite (new tweet at bottom)
  const renderTweets = (tweets) => {
    $("#display-tweets-conatiner").empty();
    let numberofTweets = tweets.length - 1;
    for (let i = numberofTweets; i >= 0; i--) {
      $("#display-tweets-conatiner").append(createTweetElement(tweets[i]));
    }
 
  };

// load tweets with ajax
  const loadTweets =  () => {
    
     $.ajax({
      url: '/tweets',
      method: 'get'
    })
      .then((response) => {
        renderTweets(response);
      
      })
      .catch((error) => {
        return error;
      });
  };

  //form validation inserts errors in Error-box(labal class in form) , make it visible and return boolen used in ajax post request
  const formValidation = () =>{
    const $tweet = $("#tweet-text").val();
    let error = "";
    if ($tweet === "" || $tweet === null) {
      error = "⚠️ you cannot submit empty form ,Please Enter something to tweet ⚠️";
      $(".Error-box").text(error);
      $('.Error-box').removeClass("hidden");
      return false;
    }
    if ($tweet.length > 140) {
      error = "⚠️ Too Long ,please Respect 140 chars limit ⚠️";
      $(".Error-box").text(error);
      $('.Error-box').removeClass("hidden");
      return false;
    }
    return true;
    
  };
 
  
  $("form").on('submit', function(event) {
    event.preventDefault();
    
    const result = formValidation();   // form validates true
    if (result) {
      const formData = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: formData,
        success: function() {
          loadTweets();               //if success load tweets and make text area empty,counter back to 140
          $('#tweet-text').val('');
          $('.counter').val("140");
        },
      });
    }  else {
   
      $(this).children().focus();
    }
  
  });
  
  loadTweets();  // called to tweet tweet on document ready


});




