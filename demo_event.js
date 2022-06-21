var events = require('events');
var eventsEmitter = new events.EventEmitter();

var myeventFunction =function(){
    console.log("Hello world");
}
 eventsEmitter.on('hello',myeventFunction);

 eventsEmitter.emit('hello');