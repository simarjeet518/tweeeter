
$(document).ready(function () {
  const tweetData = [{
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1639420628065
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1639507028065
  }

  ]

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
    for (let tweet of tweets) {
      $("#display-tweets-conatiner").append(createTweetElement(tweet));
    }
  }
  const loadTweets =  (requ) => {
    console.log("inside load tweets");
    $.ajax({
    url: '/tweets',
    method: 'get'
  })
    .then((response) => {
      if(requ){
        renderTweets(response[response.length-1]);
      } else {
      renderTweets(response); 
      }
    })
    .catch((error) => {
      return error;
    })
   
  }

  $("form").on('submit', function (event) {

    event.preventDefault();
    const formData = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: formData,
      success: function () {
        loadTweets();
      },
    })
    
    $('#tweet-text').val('');
    $('.counter').val("140");
   });
  loadTweets();

  
 

});




