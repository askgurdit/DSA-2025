// const http = require('node:http'); --- works with commonJS
// After changin the json file type to module -- it uses ES6
 // import http from "http"

/*
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */


import {a, b, d} from "./myModule.js"
console.log(a, b, d)

// import obj from "./myModule.js"
// console.log(obj);

import harry from "./myModule.js"
console.log(harry);