var http = require('http');
var Simpleframwork = require('./simpleframwork');

var app = Simpleframwork.Router();

app.get('/greet', function(req, res) {
  console.log('/greet : request received...');
  Simpleframwork.sendResponse(res, 'hello world');
});

app.post('/upload', function(req, res) {
  console.log('/upload : POST request received...');
  Simpleframwork.sendResponse(res, 'POST request received');
});

var server = http.createServer(app.route);
server.listen(3000, function() {
  console.log('server running on 3000...');
});
