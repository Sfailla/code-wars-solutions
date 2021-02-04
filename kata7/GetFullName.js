class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    if (!this.firstName) {
      this.firstName = '';
    }
    if (!this.lastName) {
      this.lastName = '';
    }

    return this.firstName + ' ' + this.lastName;
  }
}

new Dinglemouse('Clint', 'Eastwood').getFullName();
new Dinglemouse('', 'Eastwood').getFullName();

console.log(new Dinglemouse('Clint', 'Eastwood').getFullName(), 'Clint Eastwood');
