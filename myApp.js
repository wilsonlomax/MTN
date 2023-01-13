const { Router } = require('express');
let express = require('express');
let dotenv = require('dotenv').config();
let app = express();
let viewsIndex = __dirname + '/views/index.html'
let publicStyle = __dirname + '/public/style.css'
let response = 'Hello World'.toUpperCase()

app.get('/json', (req, res) => {
  if(process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({"message": response})
  } 
  else {
  res.json({"message": "Hello json"})
  }

})

app.get("/", (req, res) => {
  res.sendFile(viewsIndex)
})

app.use(express.static('/public'), (req, res) => {
  res.sendFile(publicStyle)
})


console.log("Hello World");


































 module.exports = app;
