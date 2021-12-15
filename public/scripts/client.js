$(document).ready(function () {

 function createTweetElement (tweetObj) {
   
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
             <span>${tweetObj.created_at}</span>
             <div class="icons">
               <i class="fas fa-flag"></i>
               <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
             </div>
           </footer>
        </article>`
  }

  
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

  const $tweet =createTweetElement(tweetData[0]);
 
  $("#tweets-container").append($tweet);
});




