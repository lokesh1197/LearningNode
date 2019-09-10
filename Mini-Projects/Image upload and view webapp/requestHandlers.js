var exec = require("child_process").exec,
    querystring = require("querystring"),
    fs = require("fs");
    formidable = require("formidable");

function start(response) {
  console.log("Request handler 'start' was called.");

  // function sleep(milliSeconds) {
  //   var startTime = new Date().getTime();
  //   while (new Date().getTime() < startTime + milliSeconds);
  // }

  var body_textArea = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
  var body_uploadImg = '<html>'+
    '<head>'+
    '<meta http-equiv="content-type" '+
    'content="text/html"; charset="UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

  // exec("find /", {timeout: 10000, maxBuffer: 20000*1024},
    // function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body_uploadImg);
    response.end();
  // });
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");

    // In case of file already exists
    fs.rename(files.upload.path, "/tmp/test.jpg", function(error) {
      if (error) {
        fs.unlink("/tmp/test.jpg");
        fs.rename(files.upload.path, "/tmp/test.jpg");
      }
    });
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Received image: <br/>");
  response.write("<img src='/show' />");
  response.end();
  });
}

function show(response) {
  console.log("Request handler 'show' was called.");
  response.writeHead(200, {"Content-Type": "image/jpg"});
  fs.createReadStream("/tmp/test.jpg").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;
