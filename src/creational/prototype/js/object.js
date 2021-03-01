const personPrototype = {
  firstName: 'Gabriel',
  lastName: 'Navas',
  age: 30,

  fullName () {
    return `${this.firstName} ${this.lastName}`
  }
}

const anotherPerson = Object.create(personPrototype)

// Procura no objeto caso não achar, procura no prototype
console.log(anotherPerson.fullName()) // Gabriel Navas

// fazendo shadow na propriedade firstName do prototype
anotherPerson.firstName = 'João'
console.log(anotherPerson.fullName()) // João Navas
