function handleSubmitJobButton(){
    let title = document.getElementById('title').value
    let adress =document.getElementById('adress').value
    let country = document.getElementById('cntry').value
    let description = document.getElementById('dsc').value
    let price = document.getElementById('price').value
    //create a job and add it to data base
    console.log(title)
    console.log(adress)
    console.log(country)
    console.log(description)
    console.log(price)
    //CreateJob(user,title,adress,country,description,price)
    window.location.replace("/main.html");
}