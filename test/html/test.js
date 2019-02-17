const job = require("/jobs.js")

function handleSubmitButton(){
    console.log("herere")
}
function CreateJob(){
    window.location.replace("/jobCreation.html");
}
function handleSubmitJobButton(){
    let title = document.getElementById('title').value
    let adress =document.getElementById('adress').value
    let country = document.getElementById('cntry').value
    let description = document.getElementById('dsc').value
    let price = document.getElementById('price').value
    //create a job and add it to data base
    CreateJob(user,title,adress,country,description,price)
    window.location.replace("/test.html");
}