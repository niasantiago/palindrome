const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  
  else if (page == '/api') {
    if ('input' in params) {
      if (params['input'] == params['input'].toLowerCase.split("").reverse().join("")) { 
        res.writeHead(200, {'Content-Type': 'application/json'});
        let conclusion = "Yes" 
        res.end(JSON.stringify(conclusion));
      } //student = leon
      else if (params['input'] != params['input'].toLowerCase.split("").reverse().join("")) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        let conclusion = "No" 
        res.end(JSON.stringify(conclusion));
      } //student != leon
    } //student if
  } //else if
  
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);

// function Zyonne () {  
  //   // assign string 
  // let step1 = "step1" 
  // // string to an array 
  // let step2 = step1.split("") 
  // // reversing string 
  // let step3 = step2.reverse() 
  // // joining string back 
  // let step4 = step3.join("")

// if (name == name.split("").reverse().join(""))
// {
//   alert("Palindrome") 
// } 
// else if (name != name.split("").reverse().join("")) 
// {
//   alert("No")
// }
