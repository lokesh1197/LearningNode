// let moduleFunc = require('./module');

// =================== Exercise 6 ===============================
// moduleFunc(process.argv[2], process.argv[3], callback);
//
// function callback(error, data) {
//   if (error) console.error("An error has occured: " + error);
//   data.forEach(function(item) {
//     console.log(item);
//   });
// }
// ==============================================================


// =================== Exercise 7 ===============================
// moduleFunc(process.argv[2], callback);
// function callback(error, data) {
//   if (error) return console.error("Received error: " + error);
//   console.log(data);
// }
// ==============================================================


// =================== Exercise 8 ===============================
// let http = require('http');
// http.get(process.argv[2], function(response) {
//   response.setEncoding('utf8');
//   let content = "";
//   response.on('data', data => content += data);
//   response.on('end', function() {
//     console.log(content.length);
//     console.log(content);
//   });
// }).on('error', console.error);

// let http = require('http');
// let bl = require('bl');
// http.get(process.argv[2], function(response) {
//   response.pipe(bl(function(err, data) {
//     if (err) return console.error(err);
//     data = data.toString()
//     console.log(data.length);
//     console.log(data);
//   }));
// });
// ==============================================================


// =================== Exercise 9 ===============================
// let http = require('http');
// let bl = require('bl');
//
// let count = 0;
// let content = ["", "", ""];
//
// http.get(process.argv[2], function(response) {
//   response.pipe(bl(function(error, data) {
//     if (error) return console.error(error);
//     data = data.toString();
//     content[0] = data;
//     count++;
//     if (count == 3) print();
//   }));
// });
// http.get(process.argv[3], function(response) {
//   response.pipe(bl(function(error, data) {
//     if (error) return console.error(error);
//     data = data.toString();
//     content[1] = data;
//     count++;
//     if (count == 3) print();
//   }));
// });
// http.get(process.argv[4], function(response) {
//   response.pipe(bl(function(error, data) {
//     if (error) return console.error(error);
//     data = data.toString();
//     content[2] = data;
//     count++;
//     if (count == 3) print();
//   }));
// });
//
// function print() {
//   content.forEach( item => console.log(item) );
// }

// ==============================================================


// =================== Exercise 10 ==============================
// let net = require('net');
// let server = net.createServer(function(socket) {
//   let date = new Date();
//   let year = date.getFullYear();
//       month = date.getMonth() + 1;
//       day = date.getDate();
//       hours = date.getHours();
//       mins = date.getMinutes();
//
//   if(month < 10) month = "0" + month;
//   if(day < 10) day = "0" + day;
//   if(hours < 10) hours = "0" + hours;
//   if(mins < 10) mins = "0" + mins;
//
//   let data = `${year}-${month}-${day} ${hours}:${mins}`;
//   // socket.write(data);
//   socket.end(data);
// });
// server.listen(process.argv[2]);

// ==============================================================


// =================== Exercise 11 ==============================
// let http = require('http');
// let fs = require('fs');
//
// http.createServer(function(request, response) {
//   response.writeHead(200, {"content-type": "text/plain"});
//   fs.createReadStream(process.argv[3]).pipe(response);
// }).listen(+process.argv[2]);

// ==============================================================


// =================== Exercise 12 ==============================
// let http = require('http');
// let map = require('through2-map');
//
// http.createServer(function(request, response) {
//   if (request.method !== 'POST') return response.end('Send a POST');
//   request.pipe(map(function(data) {
//     return data.toString().toUpperCase();
//   })).pipe(response);
// }).listen(Number(process.argv[2]));

// ==============================================================


// =================== Exercise 13 ==============================
// let http = require('http');
// let url = require('url');
//
// http.createServer(function(request, response) {
//   if (request.method.toLowerCase() !== 'get') return response.end('Send a GET');
//   let reqUrl = url.parse(request.url);
//   if (reqUrl.pathname === '/api/parsetime') {
//     let obj = {};
//     // obj['hour'] = reqUrl.query;
//     [obj['hour'], obj['minute'], obj['second']] = reqUrl.query.split('=')[1].split('.')[0].split('T')[1].split(':');
//     response.writeHead(200, { 'Content-Type': 'application/json'});
//     response.end(JSON.stringify(obj));
//   } else if (reqUrl.pathname === '/api/unixtime') {
//     // let date = Date();
//     let ms = (new Date).getTime();
//     response.writeHead(200, { 'Content-Type': 'application/json'});
//     response.end(JSON.stringify({ "unixtime" : ms}));
//   } else {
//     response.writeHead(200, { 'Content-Type': 'text/plain'});
//     response.end("404 Page Not Found");
//   }
//
// }).listen(Number(process.argv[2]));

// ==============================================================


console.log('Exercise 10 and 13 failed');
