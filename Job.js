const User = require('./User.js');

var id = 2000;

class Job {
  constructor(host, jobber, title, address, city, country, description, category, price) {
    this.id = id++;
    this.accepted = false;

    this.host = host;
    this.jobber = jobber;

    this.title = title;
    this.description = description;
    this.address = address;
    this.city = city;
    this.country = country;
    this.category = category;
    this.price = price;

  }
  // Getter
  getTitle() {
    return this.title;
  }
  // Method
  setAccepted() {
    this.accepted = true;
  }
}

module.exports = Job;
