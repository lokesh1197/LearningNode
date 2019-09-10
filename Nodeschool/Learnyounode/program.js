// EXERCISES 1 to 5

function HELLO_WORLD() {
    console.log("HELLO WORLD");
    return undefined;
}

function BABY_STEPS() {
    // console.log(process.argv);
    function sum(numbers) {
        var tempSum = 0;
        for (var i = 0; i < numbers.length; i++) {
            tempSum = tempSum + Number(numbers[i]);
        }
        return tempSum;
    }

    console.log(sum(process.argv.splice(2)));
    return undefined;
}

function MY_FIRST_IO() {

    var inputFile = process.argv[2];
    var fs = require('fs');
    var input = fs.readFileSync(inputFile).toString();
    var input = fs.readFileSync(inputFile, 'utf8');
    var lines = input.split('\n');
    return lines.length - 1;
}

function MY_FIRST_ASYNC_IO(func, filename) {
  var fs = require('fs');
  var input = fs.readFile(filename, function(error, data) {
    if (error) throw error;
    func(data.toString().split('\n').length - 1);
  });
}  

function FILTERED_LS(dir, extension) {
  var fs = require('fs');
  var path = require('path');
  fs.readdir(dir, function(error, list){
    list.forEach(function (item) {
      // if (item.split('.').slice(-1)[0] == extension) console.log(item);
      if (path.extname(item) == "." + extension) console.log(item);
    });
  });
}

// FILTERED_LS(process.argv[2], process.argv[3]);
// console.log(process.cwd());
// MY_FIRST_ASYNC_IO(console.log, process.argv[2]);
// console.log(MY_FIRST_IO());
// console.log(__dirname);
// console.log(__filename);
