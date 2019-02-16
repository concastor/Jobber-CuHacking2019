class User {
  constructor(name, city, address, phoneNum, country, postalCode) {
    this.name = name;
    this.city = city;
    this.address = address;
    this.phoneNum = phoneNum;
    this.phoneNum = country;
    this.postalCode = postalCode;
    this.rating = 5.0
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

  getRating() {
    return this.rating;
  }
  // Method
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
