// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
​
class Intern extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
​
  getRole() {
    return "Intern";
  }
​
  getGithub() {
    return this.github;
  }
    
}
​
module.exports = Intern;