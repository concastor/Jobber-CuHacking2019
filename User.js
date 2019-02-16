
const Job = require('Job.js');

var id = 1000

class User {
  constructor(name, city, address, phoneNum, country, postalCode, email) {
    this.id = id++
    this.name = name;
    this.city = city;
    this.country = country;
    this.address = address;
    this.phoneNum = phoneNum;
    this.phoneNum = country;
    this.postalCode = postalCode;
    this.rating = 5.0
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

  //function lets a user create a job.
  createJob(jobName, jobPrice) {
    console.log("Creating new job ", jobName, " for ", jobPrice);
  }
  //function lets a user accept a job that is listed.
  acceptJob(jobName, jobPrice) {
    console.log("Accepted ", jobName, " for ", jobPrice);
  }
  //function lets a user delete a job.
  deleteJob(jobName, jobPrice) {
    console.log("Deleting ", jobName, " for ", jobPrice);
  }

  quitJob(jobName, jobPrice) {
    console.log("Quitting ", jobName, " for ", jobPrice);
  }
}

module.exports = User;
