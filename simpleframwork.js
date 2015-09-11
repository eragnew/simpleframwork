'use strict';



var routes = {
  'GET': {},
  'POST': {},
  'PUT': {},
  'PATCH': {},
  'DELETE': {}
};

var Router = function() {};

Router.prototype.get = function(route, callback) {
  routes['GET'][route] = callback;
};

Router.prototype.post = function(route, callback) {
  routes['POST'][route] = callback;
};

Router.prototype.put = function(route, callback) {
  routes['PUT'][route] = callback;
};

Router.prototype.patch = function(route, callback) {
  routes['PATCH'][route] = callback;
};

Router.prototype.delete = function(route, callback) {
  routes['DELETE'][route] = callback;
};

Router.prototype.route = function(req, res) {
  if (typeof routes[req.method][req.url] === 'function') {
    routes[req.method][req.url](req, res);
  }
};

exports.sendResponse = function(response, message) {
  response.writeHead(200, {
    'Content-Type': 'application/json'
  });
  response.write(JSON.stringify({msg: message}));
  response.end();
}

exports.Router = function() {
  return new Router();
};


