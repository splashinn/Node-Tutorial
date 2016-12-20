var http = require("http");

http.createServer(function (request, response) {
  // Send HTTP header
  // HTTP status 200-ok
  // Content type text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body
  response.end('Hello peeps');
}).listen(8080);

// Console will print this message
console.log("Server running at localhost:8080");
