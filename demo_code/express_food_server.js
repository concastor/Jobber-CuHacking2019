

let http = require('http')
let url = require('url')
let qstring = require('querystring')
const https = require('https') //food2fork now requires https
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000
//Please register for your own key replace this with your own.
const API_KEY = 'c8ed090f93f748a741b8f2622a4073cc' //'6af1eb071b8705baa8752db2bc67fd76' //<== INSERT YOUR KEY HERE
const ROOT_DIR = '/public' //root directory for our static pages

function sendResponse(recipeData, res) {
  var page = '<html><head><title>Express Recpies</title></head>' +
    '<body>' +
    '<form method="post">' +
    'Ingredient: <input name="ingredient"><br>' +
    '<input type="submit" value="Get Recipes">' +
    '</form>'
  if (recipeData) {
    page += '<h1>Recipes'+'</h1>'

    //parse data into an array
    let recobj = JSON.parse(recipeData)
   

    for (let i=0; i < recobj.count; i++){
      let currRec = recobj.recipes[i]

      //display div container that acts as a link
       page += '<div style = "display:inline-block; border:2px solid black;'
       + 'margin:30px;word-wrap: normal;" onclick = "location.href = \'' + currRec.f2f_url +'\'">'
       +'<img src = "' + currRec.image_url + '" height = "350" width = "350">'
       + '<h2 style = "text-align:center; word-wrap: normal; width : 350 ">' + currRec.title + '</h2></div>'
    }
  }
  page += '</body></html>'
  res.end(page);
}



app.use(express.static(__dirname + ROOT_DIR)) //provide static server

//handle GET route
app.get('/', function (req, res) {
  //get requested url
  let requestURL = req.url
  let query = url.parse(requestURL).query //GET method query parameters if any
  q = qstring.parse(query)
  
  //get recipes 
  getRecipes(q.ingredient, res)
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
  console.log(`http://localhost:3000/?ingredient=tomato`)
  console.log('http://localhost:3000/recipes.html')
  console.log('http://localhost:3000/recipes')
  console.log('http://localhost:3000/index.html')
  console.log('http://localhost:3000/')
  console.log('http://localhost:3000')
})
