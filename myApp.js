const { Router } = require('express');
let express = require('express');
let app = express();
let viewsIndex = __dirname + '/views/index.html'
let publicStyle = __dirname + '/public/style.css'

app.get("/", (req, res) => {
  res.sendFile(viewsIndex)
})

app.use(express.static('/public'), (req, res) => {
  res.sendFile(publicStyle)
})

app.get("/json", (req, res) => {
  res.json({"message": "Hello World"})
})


console.log("Hello World");


































 module.exports = app;
