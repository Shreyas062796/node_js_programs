net = require('net');

var sockets = [];

var sock = net.Server(function(socket) {
	sockets.push(socket);
	socket.on('data', function(d) {
		for(var i = 0;i < sockets.length; i++) {
		sockets[i].write(d);
		}
	    });
	socket.on('end', function() {
		var x = sockets.indexof(socket);
		sockets.splice(x,1);
	    });
    }).listen(8000);