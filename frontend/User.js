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

var flag = false;

const Job = require('./Job.js');

var id = 1000

class User {
  constructor(name, city, address, phoneNum, country, postalCode, email, password) {
    /*
    this.id = id++
    this.name = name;
    this.city = city;
    this.country = country;
    this.address = address;
    this.phoneNum = phoneNum;
    this.country = country;
    this.postalCode = postalCode;
    this.rating = 5.0;
    */
    this.email = email;
    this.password = password;

  }

  createAccount(email, password) {

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      console.log("creating new user with ", email, password)
      var errorCode = error.code;
      var errorMessage = error.message;

    });
  }

  getCurrentUser() {

    /*
    console.log("trying to get current user")

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("logged in")
        return firebase.auth().currentUser
      } else {
        console.log("no one is logged in")
      }

      //let user = firebase.auth().currentUser;
      console.log("trying to print user: ", user);
    });
    */

    /*
    firebase.auth().onAuthStateChanged( user => {
      if (user) {return firebase.auth().currentUser}
    });*/

    /*
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(function() {
      return firebase.auth().onAuthStateChanged();
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });*/

    console.log("firebase hates you you don't get the current user stupid bitch")

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



/*
//CHECK IF LOGGED IN
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("logged in")
  } else {
    console.log("no one is logged in")
  }

  //let user = firebase.auth().currentUser;
  console.log("trying to print user: ", user);
});
*/

/*
//LOG IN USER
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  console.log("signed in with ", email, password)
  var errorCode = error.code;
  var errorMessage = error.message;

});
*/
