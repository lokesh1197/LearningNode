// ===================================
// Exercise 6: Filtered LS with module
// ===================================

// module.exports = function (dirpath, fileExt, callback) {
//   let fs = require('fs');
//   let path = require('path');
//   fs.readdir(dirpath, function(error, list) {
//     if (error) return callback(error);
//     list = list.filter(function (item) {
//       return path.extname(item) === '.' + fileExt;
//     });
//     // let data = [];
//     // list.forEach(function (item) {
//     //   if (path.extname(item) === '.' + fileExt) data.push(item);
//     // });
//     callback(null, list);
//   });
// }


// ===================================
// Exercise 7: HTML GET Request
// ===================================

// module.exports = function(url, callback) {
//   let http = require('http');
//   http.get(url, function(response) {
//     response.setEncoding('utf8');
//     response.on('data', function(data) {
//       callback(null, data);
//     })
//     response.on('error', function(error) {
//       callback(error);
//     });
//   }).on('error', callback);
// }


// ===================================
// Exercise 7: HTML GET Request
// ===================================


