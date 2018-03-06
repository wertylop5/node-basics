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
	response.write("Hi There!");
	response.end();		//this is http specific
});

server.on("listening", () => {
	console.log(server.address());
});

server.listen(5000, "localhost");

