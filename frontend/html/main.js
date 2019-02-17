var $j = jQuery.noConflict();

let jobs = []
$(document).ready(function() {
  // httpGetAsync("/jobs",function(){
    //   let jobs = JSON.parse(responseText);
    //   console.log(jobs[1].description)
    // })
    $.when(
      $.get("jobs")
        ).done(function(data) {
          console.log(data)
          for (item in data){
            
            jobs.push(data[item]);
          }
          console.log(jobs)
          let jobPost  = ''
          for (let i = 0; i < jobs.length; i++){
            let CATEGORY =  jobs[i].category;
            let Title = jobs[i].title;
            let description = jobs[i].description;
            
            jobPost += '<div class="d-flex align-items-center p-2 my-2 text-black-50 bg-white rounded box-shadow"><div class="col-sm-2 y-3 pl-2 col-md-2 sidebar"><p class="media-body  mb-0 small border-gray">'+ CATEGORY + '</p></div><div class="col-md-8 px-1 "><p class="media-body pl-3 pb-3 mb-0 small lh-125 border-right border-left border-gray"><strong class="h6 d-block text-gray-dark">'+ Title + '</strong>'+ description + '</p></div><div class="col-*-* pr-3 y-3"></div><button type="button" class="btn btn-light btn-large">Accept</button></div>'
           

          }
          let foodDisplay = document.getElementById("p1")
          foodDisplay.innerHTML = '' //reset whatever is in here
          foodDisplay.innerHTML = jobPost; //set the formatedRaw data to the inner html


        });
  

  
              

  })
  