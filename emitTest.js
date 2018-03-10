"use strict";

//you want to only extend from this
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

//new EventEmitter instance
let hi = new MyEmitter();

//add a listener for the event
hi.on({yo: "5"}, () => {
	console.log("hey");
});

//you can receive arguments from the event
hi.on("weee", num => {
	console.log(`The number is: ${num}`);
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

//now emit the event
hi.emit("weee", 5);

//hi.emit({yo: "5"});

