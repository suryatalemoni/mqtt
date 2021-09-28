const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com')
client.on('connect',()=>{
    client.subscribe('topic name')// in subscribe , substriber will give messeges to publisher 
    console.log('client has subscribed');
});

client.on('message',(topic,message)=>{
    console.log(message.toString());

})