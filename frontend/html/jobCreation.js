function handleSubmitJobButton(){
    let title = document.getElementById('title').value
    let adress =document.getElementById('adress').value
    let country = document.getElementById('cntry').value
    let description = document.getElementById('dsc').value
    let price = document.getElementById('price').value
    let category = document.getElementById('category').value
    //create a job and add it to data base
    let newJob={
        title : title,
        adress : adress,
        cont: country,
        desc: description,
        category: category,
        price: price
    }
    let newnewJob = JSON.stringify(newJob)

    $.post('create',  // url
    { myData: newnewJob  }, // data to be submit
    function(data, status) {  // success callback function
             alert('status: ' + status + ', data: ' + data.responseData);
             window.location.replace("/main.html");
            },
            'json'); // response data format
            
       
      
       
    
   

}