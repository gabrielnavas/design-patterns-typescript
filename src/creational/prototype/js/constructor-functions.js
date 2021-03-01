function Person (firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

const personPrototype = {
  firstName: 'Gabriel',
  lastName: 'Navas',
  age: 30,

  fullName () {
    return `${this.firstName} ${this.lastName}`
  }
}

Person.prototype = Object.create(personPrototype)

const person = new Person('João', 'Silva', 25)

console.log(person.firstName) // João
console.log(person.age) // 25
console.log(person.fullName()) // João Silva
