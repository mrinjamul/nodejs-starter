const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const PORT = process.env.PORT || 5000;

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/about.html"));
});

router.get("/sitemap", function (req, res) {
  res.sendFile(path.join(__dirname + "/sitemap.html"));
});

//add the router
app.use("/", router);
app.listen(PORT);

console.log(`Listening on ${PORT}`);

/* This is a Template
 *
 **/

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 5000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
