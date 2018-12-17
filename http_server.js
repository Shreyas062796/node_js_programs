console.log("hello world");

var http = require("http");

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Hello world");
    }).listen(8080);

console.log("server is running on localhost:8080");
console.log("node");


