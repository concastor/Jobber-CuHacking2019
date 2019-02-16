const User = require('./User.js');

let a = new User("Alexei", "Ottawa", "123 Main St", 6131234567, "Canada", "A1B2D3", "alexei@notyourproblem.com")
let b = new User("Martin", "Toronto", "1234 Main St", 6131234568, "Malaysia", "A1B9D3", "martin@notyourproblem.com")

console.log(a)
console.log(b)

a.createJob("rake my leaves, bitch", 20);

b.acceptJob(1000)
