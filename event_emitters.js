var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('data_received', function() {
    console.log('data received succesful');
});

eventEmitter.on('data_exited', function() {
    console.log('data exited successful');
});
eventEmitter.emit('data_exited');
setTimeout(function(){
   eventEmitter.emit('data_exited');
},2000)
eventEmitter.emit('data_received'); 
