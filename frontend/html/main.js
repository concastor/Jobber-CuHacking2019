var $j = jQuery.noConflict();
function httpGetAsync(theUrl, callback)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 
  xmlHttp.send(null);
}

$(document).ready(function() {
  // httpGetAsync("/jobs",function(){
  //   let jobs = JSON.parse(responseText);
  //   console.log(jobs[1].description)
  // })
  $.ajax({
    type: "GET",
    url: "/jobs",
    dataType: "JSON"
}).done(function (res) {
  let jobs = JSON.parse(data)
}).fail(function (jqXHR, textStatus, errorThrown) {
    alert("AJAX call failed: " + textStatus + ", " + errorThrown);
});

       console.log(jobs[1].Title)
      

  
  
  let jobPost  = ''
  //for (let i = 0; i < 5; i++){
    let CATEGORY = "damn" //jobs[i].CATEGORY;
    let Title =  "damn" //jobs[i].Title;
    let description = "christ" // jobs[i].description;
    
    jobPost += '<div class="d-flex align-items-center p-2 my-2 text-black-50 bg-white rounded box-shadow"><div class="col-sm-2 y-3 pl-2 col-md-2 sidebar"><p class="media-body  mb-0 small border-gray">'+ CATEGORY + '</p></div><div class="col-md-8 px-1 "><p class="media-body pl-3 pb-3 mb-0 small lh-125 border-right border-left border-gray"><strong class="h6 d-block text-gray-dark">'+ Title + '</strong>'+ description + '</p></div><div class="col-*-* pr-3 y-3"></div><button type="button" class="btn btn-light btn-large">Accept</button></div>'
    jobPost += jobPost = '<div class="d-flex align-items-center p-2 my-2 text-black-50 bg-white rounded box-shadow"><div class="col-sm-2 y-3 pl-2 col-md-2 sidebar"><p class="media-body  mb-0 small border-gray">'+ CATEGORY + '</p></div><div class="col-md-8 px-1 "><p class="media-body pl-3 pb-3 mb-0 small lh-125 border-right border-left border-gray"><strong class="h6 d-block text-gray-dark">'+ Title + '</strong>'+ description + '</p></div><div class="col-*-* pr-3 y-3"></div><button type="button" class="btn btn-light btn-large">Accept</button></div>' 
    jobPost +=jobPost = '<div class="d-flex align-items-center p-2 my-2 text-black-50 bg-white rounded box-shadow"><div class="col-sm-2 y-3 pl-2 col-md-2 sidebar"><p class="media-body  mb-0 small border-gray">'+ CATEGORY + '</p></div><div class="col-md-8 px-1 "><p class="media-body pl-3 pb-3 mb-0 small lh-125 border-right border-left border-gray"><strong class="h6 d-block text-gray-dark">'+ Title + '</strong>'+ description + '</p></div><div class="col-*-* pr-3 y-3"></div><button type="button" class="btn btn-light btn-large">Accept</button></div>' 
  //}

  
    let foodDisplay = document.getElementById("p1")
    foodDisplay.innerHTML = '' //reset whatever is in here
    foodDisplay.innerHTML = jobPost; //set the formatedRaw data to the inner html
              

  })
  