
let qstring = require('querystring')
const express = require('express')
const app = express()
//const user = require("./User.js")
//const job = require("./job.js")

const PORT = process.env.PORT || 3000
app.use(express.static('html'))
app.use(express.json())
var path = require("path")
app.use(express.static(path.join(__dirname, '/frontend')))




//app.use(express.static(__dirname + ROOT_DIR)) //provide static server

//handle GET route
app.get('/login', function (req, res) {
  //get requested url

  res.sendFile(path.join(__dirname, "html", "login.html"))
  

})
app.get('/', function (req, res) {
  //get requested url

  res.sendFile(path.join(__dirname, "html", "main.html"))
  

})

//handle POST route
app.post('/', function (req, res) {
  let reqData = ''
  req.on('data', function(chunk) {
    reqData += chunk
  })
  req.on('end', function() {
    console.log(reqData);
    var queryParams = qstring.parse(reqData)
    console.log(queryParams)
    getRecipes(queryParams.ingredient, res)
  })
})
app.use(redirectUnmatched)

//all unknown urls redirect to same location
function redirectUnmatched(req, res) {
  res.redirect("http://localhost:3000/");
}

app.listen(PORT, (error) => {
  if (error)
    return console.log(error)
  console.log(`Server is listening on PORT ${PORT} CNTL-C to quit`)
  console.log(`To Test:`)
  console.log(`http://localhost:3000/`)
})
