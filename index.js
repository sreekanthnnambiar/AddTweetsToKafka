
var kafka = require('kafka-node')
var Producer = kafka.Producer
var client = new kafka.Client("localhost:2181/")
 
var countriesTopic = "countries";
 
    KeyedMessage = kafka.KeyedMessage,
    producer = new Producer(client),
    km = new KeyedMessage('key', 'message'),
    countryProducerReady = false ;
 
producer.on('ready', function () {
    console.log("Producer for countries is ready");
    countryProducerReady = true;
    handleCountry();
});
  
producer.on('error', function (err) {
  console.error("Problem with producing Kafka message "+err);
})
 
 
function handleCountry() {   
    var country = { "name" : 'india'
                  , "code" : '123'
                  , "continent" : 'asia'
                  , "population" : '100M'
                  , "size" : '10000kmsq'
                  };
     console.log(JSON.stringify(country));
     produceCountryMessage(country)
                 
}
 
function produceCountryMessage(country) {
    KeyedMessage = kafka.KeyedMessage,
    countryKM = new KeyedMessage(country.code, JSON.stringify(country)),
    payloads = [
        { topic: countriesTopic, messages: countryKM, partition: 0 },
    ];
    if (countryProducerReady) {
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
    } else {
        console.error("sorry, CountryProducer is not ready yet, failed to produce message to Kafka.");
    }
}