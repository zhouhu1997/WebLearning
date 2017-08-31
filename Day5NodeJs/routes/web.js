// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 1337;
// http.createServer((req, res) => {
//
// 	res.writeHead(200, { 'Content-Type': 'text/plain' });
//
// 	res.end('Hello World\n');
//
// }).listen(port, hostname, () => {
//
// 	console.log(`Server running at http://${hostname}:${port}/`);
//
// });

//Use express to create a server
var express = require('express');
var router = express.Router();
var app = express();

//use a static file
app.use(express.static('./public'));


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Try' });
});

module.exports = router;


