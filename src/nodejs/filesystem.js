const fs = require("fs");

const files = fs.readdir("./", function (err, data) {
  if (err) throw err;
  else console.log(data);
});
//  [ 'filesystem.js', 'path.js', 'scriptA.js', 'scriptB.js', 'url.js' ]

const data = fs.readFile("url.js", "utf8", function (err, data) {
  if (err) throw err;
  else console.log(data);
});

fs.writeFile("test.txt", "hello world", function (err) {
  if (err) throw err;
  else console.log("test.txt file created");
});

fs.appendFile("test.txt", "hello world2", function (err) {
  if (err) throw err;
  else console.log("appended hello world2 to test.txt");
});

fs.unlink("test.txt", function (err) {
  if (err) throw err;
  else console.log('test.txt file deleted');
});

fs.rename('test.txt','newName.txt',function(err){
    if(err) throw err;
    console.log('file renamed');
});