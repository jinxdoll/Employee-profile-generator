const Employee = require("../lib/employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.username = username;
    }
    getGitHub() {
        return this.github
    }
    getRole() {
        return Engineer;
    }

}

module.exports = Engineer;