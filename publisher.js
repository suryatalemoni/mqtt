const mqtt = require('mqtt'); // require mqtt protocol
var client = mqtt.connect('mqtt://broker.hivemq.com'); //connect to the broker
client.on('connect',()=>{
    setInterval(()=>{
        var random = Math.random()=Math.random()*50;
        console.log(random);
        if(random < 35){
            client.publish('topic name','simple mqtt'+random.toString()+".") //in publish it publish by using publish keyword
        }
    }),3000;
}) 