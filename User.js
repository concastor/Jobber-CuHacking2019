class User {
  constructor(name, city) {
    this.name = name;
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

module.exports = User;
