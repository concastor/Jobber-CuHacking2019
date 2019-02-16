const User = require('./User.js');

class Job {
  constructor(name, city) {
    this.host = host;
    this.city = city;
  }
  // Getter
  getName() {
    return this.name;
  }
  // Method
  createJob(jobName, jobPrice) {
    console.log("creating new job ", jobName, " for ", jobPrice);
  }
}

module.exports = Job;
