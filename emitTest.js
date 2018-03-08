"use strict";

//you want to only extend from this
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}



//new EventEmitter instance
let hi = new MyEmitter();

hi.on({yo: "5"}, () => {
	console.log("hey");
});

hi.on({yo: "5"}, () => {
	console.log("uhhh");
});

/*
Will work on Node 6+

hi.prependListener({yo: "5"}, () => {
	console.log("cutting the line");
});
*/

hi.emit({yo: "5"});

