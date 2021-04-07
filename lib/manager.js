const Employee = require("../lib/employee");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }

  createCard() {
    let HTML = `
  <div class="card shadow" style="width: 250px">
  <div class="card-header bg-primary text-light h2">
     ${this.name}<br />
     <span class="h4"> <i class="fas fa-mug-hot"></i> Manager </span>
  </div>
  <div class="card-body" style="background-color: #f1f1f1;">
     <ul class="list-group">
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">
           Email:
           <a href="mailto:${this.email}"
              >${this.email}</a
           >
        </li>
        <li class="list-group-item">Office number: ${this.officeNumber}</li>
     </ul>
  </div>
  </div>
  `;

    return `
  <div class="card shadow" style="width: 250px">
  <div class="card-header bg-primary text-light h2">
     ${this.name}<br />
     <span class="h4"> <i class="fas fa-mug-hot"></i> Manager </span>
  </div>
  <div class="card-body" style="background-color: #f1f1f1;">
     <ul class="list-group">
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">
           Email:
           <a href="mailto:${this.email}"
              >${this.email}</a
           >
        </li>
        <li class="list-group-item">Office number: ${this.officeNumber}</li>
     </ul>
  </div>
  </div>
  `;
  }
}

module.exports = Manager;
