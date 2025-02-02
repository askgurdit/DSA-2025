const express = require('express');

const blog = require('./routes/blog')
const shop = require('./routes/shop')

//app.use('/birds', birds)

const cors = require('cors'); // Import CORS
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(express.static("public"));
app.use('/blog', blog)
app.use('/shop', shop)
//app.use(express.json()); // Allow JSON body parsing

// GET request handler
app.get('/', (req, res) => {
   console.log("Hey, it's a GET request");
   res.send('Hello World GET!');
});

// POST request handler
app.post('/', (req, res) => {
   console.log("Hey, it's a POST request");
   res.send('Hello World POST!');
});

// PUT request handler
app.put('/', (req, res) => {
   console.log("Hey, it's a PUT request");
   res.send('Hello World PUT!');
});

// Route for serving index.html
app.get("/index", (req, res) => {
   console.log("Hey, it's index");
   res.sendFile('templates/index.html', { root: __dirname });
});

// API route returning JSON
app.get("/api", (req, res) => {
   console.log("Hey, it's API");
   res.json({ a: 1, b: 2, c: 3 });
});

// Start the server
app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});

//in browser console
/*
fetch("http://localhost:3000", { 
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "Hello Server" }) // Optional payload
})
.then(res => res.text())
.then(console.log)
.catch(console.error);
*/