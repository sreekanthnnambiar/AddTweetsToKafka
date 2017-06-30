var Twit=require('twit');//we can get this package details from www.npmjs.com
var T = new Twit({
  consumer_key:         'I4efZR5oNrhyQPHUaOoSR1HXu',
  consumer_secret:      'v5aiIOxPMRAOm80l3W5Kb8yokRiWfQ29JMhliN6HyrvpbjqTrO',
  access_token:         '877811802767216640-kvNUsnybenwRKRSoHrwRVOta1o0SDoj',
  access_token_secret:  'IkzVi1UPbSkukfzLtoVsPIELPk5cuPXcw9AlwFbvjhz2r',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

T.get("statuses/user_timeline", {user_id: '807095', count: 200}, function(err, data, response) {
  console.log(data); 

  

  // Submit another request using the last_id
  T.get("statuses/user_timeline", {screen_name: 'nodejs', count: 200}, function(err, data, response) {
      console.log(data); 
  })
})