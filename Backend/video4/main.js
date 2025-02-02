/* const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */

const express = require('express')
const app = express()
const port = 3000

//static file
app.use(express.static('public'))
// Serving static file -- documentation
//////////////

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!1')
})

app.get('/about', (req, res) => {
    res.send('Hello About!1')
  })

  app.get('/contact', (req, res) => {
    res.send('Hello contact!1')
  })

 app.get('/blog/:slug', (req, res) => {
//     // logic to fetch {slug} from the db
 // console.log(req);
 // For URL: http://127.0.0.1:3000/blog/intro-to-padosi?mode=dark&region=in
 console.log(req.params); // will output { slug: 'intro-to-padosi' }
 console.log(req.query); // will output { mode: 'dark', region: 'in'}
    res.send(`Hello ${req.params.slug}`)
  })

// app.get('/blog/:slug/:second', (req, res) => {
//     //     // logic to fetch {slug} from the db
//       res.send(`Hello ${req.params.slug} and ${req.params.second}`)
//   })
    

//   app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db
//     res.send('Hello into-to-js')
//   })

//   app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to python from the db
//     res.send('Hello into-to-python')
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
