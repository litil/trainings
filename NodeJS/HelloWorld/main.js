var http = require("http")
var message = require('./message')

http.createServer(function (request, response) {
   // Send the HTTP header with HTTP Status (200 = OK)
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as the content of our helloWorld message
   response.end(message())
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
