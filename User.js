//DATABASE
var firebase = require("firebase");

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
//var ref = database.ref('jobs/');

const Job = require('./Job.js');

var id = 1000

class User {
  constructor(name, city, address, phoneNum, country, postalCode, email) {
    this.id = id++
    this.name = name;
    this.city = city;
    this.country = country;
    this.address = address;
    this.phoneNum = phoneNum;
    this.country = country;
    this.postalCode = postalCode;
    this.rating = 5.0;
  }

  // Getter
  getId() {
    return this.id;
  }

  // Getter
  getName() {
    return this.name;
  }

  // Getter
  getCity() {
    return this.city;
  }

  // Getter
  getAddress() {
    return this.address;
  }

  // Getter
  getPhoneNum() {
    return this.phoneNum;
  }

  getCountry() {
    return this.country;
  }

  getPostalCode() {
    return this.postalCode;
  }

  getEmail() {
    return this.email;
  }

  getRating() {
    return this.rating;
  }

  // Methods

  //*********HOST FUNCTIONS************
  //function lets a user create a job.
  createJob(jobName, jobPrice) {
    //user interface method to get info about new job here...
    let job = new Job(this, jobName, "123 main", "ott", "can", "desc1", "category1", jobPrice);
    //console.log(job);

    database.ref('jobs/' + job.id).set(job);
    //console.log("got past firebase add")

    return job;
  }
  //function lets a user delete a job.
  deleteJob(id) {
    console.log("Deleting job", id);
  }

    //*********JOBBER FUNCTIONS************
  //function lets a user accept a job that is listed.
  acceptJob(id) {
    console.log("Accepted job", id);

    database.ref('jobs/' + id).update({accepted: true, jobber: this});

    //READ DATA
    database.ref('jobs/'+id).once("value", function(snapshot) {
      console.log(snapshot.val());
    }, function (errorObject) {
      console.log("the read failed... "+ errorObject.code);
    });

  }

  quitJob(id) {
    console.log("Quitting job", id);
  }
}

module.exports = User;
