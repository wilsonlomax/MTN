const { Router } = require('express');
let express = require('express');
let dotenv = require('dotenv').config();
let app = express();
let viewsIndex = __dirname + '/views/index.html'
let publicStyle = __dirname + '/public/style.css'
let response = 'Hello json'

app.get('/json', (req, res) => {
  if(process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({"message": response.toUpperCase()})
  } 
  else {
    res.json({"message": response})
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
