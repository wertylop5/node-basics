"use strict";

//"import" the http module
const http = require("http");

let server = http.createServer();
//shorthand allows you to include the request
//callback inside of the constructor

//server is an EventEmitter
server.on("request", (request, response) => {
	/* Many object in node are stream objects,
	 * all of which implement several of the standard
	 * functionality in the stream module
	 * */
	request.setEncoding("utf8");
	console.log(request.headers);
	console.log(`method used: ${request.method}`);

	if (request.method === "POST") {
		/* Note how we have to wait for the data to come!
		 * Node is event-driven, so there's no conventional
		 * "read" method.
		 * */
		request.on("data", chunk => {
			console.log(chunk);
		});
		
		request.on("end", () => {
			console.log("Done reading from request");
		});
		
		//Let's use pipe to directly send back the data
		//in the response
		request.pipe(response);
	}
	else {
		//Writable stream
		response.write("Hi There!");
		response.end();		//this is http specific
	}
});

server.on("listening", () => {
	let addr = server.address();
	console.log(`server listening on ${addr.address}:${addr.port}`);
});

server.listen(5000, "localhost");
//server.listen(49152, "149.89.150.100");

