
let qstring = require('querystring')
const express = require('express')
const app = express()
//DATABASE
var firebase = require("firebase");
const Job = require('./Job.js');
//const User = require('./User.js');

var config = {
  apiKey: "AIzaSyBzevPJQRYnIFrZ4Q0BZP8jaPrG459ZKYI",
  authDomain: "jobber-6b282.firebaseapp.com",
  databaseURL: "https://jobber-6b282.firebaseio.com",
  projectId: "jobber-6b282",
  storageBucket: "jobber-6b282.appspot.com",
  messagingSenderId: "394757484924"
};
firebase.initializeApp(config);

var database = firebase.database();
//const user = require("./User.js")
//const job = require("./job.js")

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
    
  
  
  const PORT = process.env.PORT || 3000
  app.use(express.static('html'))
  app.use(express.json())
  var path = require("path")
  app.use(express.static(path.join(__dirname, '/frontend')))
  //app.use(express.json());  



//app.use(express.static(__dirname + ROOT_DIR)) //provide static server

//handle GET route

app.get('/createJob', function (req, res) {
  //get requested url

  res.sendFile(path.join(__dirname, "html", "jobCreation.html"))
  

})
app.get('/login', function (req, res) {
  //get requested url


  res.sendFile(path.join(__dirname, "html", "login.html"))
  

})
app.get('/jobs', function (req, res) {
  //get requested url
  database.ref('jobs/').on("value", function(snapshot) {
    console.log(snapshot.val());
    //delete req.body
    res.send(snapshot.val());
  }, function (errorObject) {
    console.log("the read failed... "+ errorObject.code);
  });

  

})
app.get('/', function (req, res) {
  //get requested url

  res.sendFile(path.join(__dirname, "html", "main.html"))
  

})



//handle POST route
app.post('/create', function (req, res) {
  let i
  console.log(req.body.myData)
  let jobber = req.body.myData
  let job = new Job("placeholder", jobber.title, jobber.adress, jobber.cont, "Canada",jobber.desc, jobber.category, jobber.price);
  //console.log(job);
  database.ref('jobs/' + job.id).set(job);
  res.send(jobber)
  //console.log("got past firebase add")
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
