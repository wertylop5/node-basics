"use strict";

const EventEmitter = require("events");

//you want to only extend from EventEmitter
class MyEmitter extends EventEmitter {}

let hi = new MyEmitter();

//add a listener for the event
hi.on({yo: "5"}, () => {
	console.log("hey");
});

//you can receive arguments from the event
hi.on("weee", num => {
	console.log(`The number is: ${num}`);
});

//on() will push the listener to the end of the listeners array
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

