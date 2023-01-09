const { Router } = require('express');
let express = require('express');
let app = express();
let absolutePath = __dirname + 'views/index.html'

app.get("/", (req, res) => {
  res.send(absolutePath)
})


console.log("Hello World");


































 module.exports = app;
