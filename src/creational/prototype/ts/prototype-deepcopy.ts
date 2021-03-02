export interface Prototype {
  clone(): Prototype
}

class Address implements Prototype {
  constructor (
    public street: string,
    public number: number
  ) { }

  clone (): Address {
    return new Address(this.street, this.number)
  }
}

class Person implements Prototype {
  public addresses: Address[] = []
  constructor (
    public name: string,
    public age: number
  ) { }

  clone (): Person {
    const newObject = new Person(this.name, this.age)
    newObject.addresses = this.addresses.map(address => address.clone())
    return newObject
  }
}

const person1 = new Person('Gabriel', 26)
person1.addresses.push(new Address('Av Brasil', 55))
person1.addresses.push(new Address('Rua dos Mineiros', 123))
const person2 = person1.clone()

person2.addresses[1].street = 'Rua Modificada'
person2.addresses[1].number = 321
console.log(person1)
console.log(person2)
