"use strict";

const net = require("net");

let server = net.createServer();
server.on("listening", () => {
	let addr = server.address();
	console.log(`server listening on ${addr.address}:${addr.port}`);
	
	//will emit the close event
	server.close();
});

server.on("close", () => {
	console.log("server is closing");
});

//emits the listening event
server.listen(49152, "149.89.150.100");	//args: port, host

