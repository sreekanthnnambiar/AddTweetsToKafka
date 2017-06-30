var Twitter = require('twit');

var client = new Twitter({
  consumer_key:         'q7jSHVoUPF655tBLSF4MMKKn6',
  consumer_secret:      'S6pxJm4EFXYSbTb6ctpyrecOvgDnE5VGa7sDrdtFuCVboXEw0E',
  access_token:         '877811802767216640-VYY3roSg2Ld5SCugt2GNiKnunUZ0Nbh',
  access_token_secret:  '6NZXPADZbQPsgYmJ7ufG6CkbaKh1SsiVRaTkYFiOyPoXp',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

client.get('users/show', {user_id:"598178117" }, function(error, tweets, response){
  if (!error) {
    console.log(tweets); // return the tweets to the API user
  } else {
   console.error('An error occurred!'+error); //error handling
  }
});