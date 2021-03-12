const EventEmitter = require('events'); //evetns = class
const emitter = new EventEmitter();

// add listener
emitter.on('connection', function(args){
    console.log('connected', args);
});

emitter.on('logout', function(){
    console.log('connection losted');
});

// trigger
emitter.emit('connection',{id:1, msg:'hello'});
emitter.emit('logout');