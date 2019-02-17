const User = require('./User.js');

let a = new User("Alexei", "Ottawa", "123 Main St", 6131234567, "Canada", "A1B2D3", "alexei@notyourproblem.com", "passA111")
//let b = new User("Martin", "Toronto", "1234 Main St", 6131234568, "Malaysia", "A1B9D3", "martin@notyourproblem.com", "passB222")
//let c = new User("Bob", "Ottawa", "123 Main St", 6131234567, "Canada", "A1B2D3", "bob@notyourproblem.com", "passC111")
a.createAccount(a.email, a.password)
//console.log(a)
//console.log(b)

a.createJob("rake my leaves, bitch", 20);
//b.createJob("shovel my snow, asshole", 15);

//a.getCurrentUser()

/*
async function wait() {
  await a.getCurrentUser().then(alert);
};*/

//console.log(a.getCurrentUser())




//console.log("print current user here: ", currUser);


//console.log(a.getCurrentUser());

//b.acceptJob(2000)

console.log("end_program")
