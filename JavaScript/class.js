
// extending prototype
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.printDetails = function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old`)
}

const user1 = new Person('user1', 20)
user1.printDetails()



// add directly to constructor function

function NewPerson(name, age) {
    this.name = name
    this.age = age

    this.printDetails = function () {
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
}


const user2 = new NewPerson('user2',20)
user2.printDetails()


// Difference between 1 and 2 is in case of prototype the object is affected
Person.prototype.printDetails = function () {
    console.log('I am modified function')
}

NewPerson.printDetails = function() {
    console.log('I am modified function')
}


user1.printDetails() // prints the new modified function
user2.printDetails() // doesnt print the new modified function

const user3 = new NewPerson('user3',20)
user3.printDetails() // doesnt print the new modified function


NewPerson.prototype.foo = function () {
    console.log('foo')
}

user2.foo()
user3.foo()


//ES6 gives class

class ClassPerson {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    printDetails() {
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
}

const user4 = new ClassPerson('user4',20)
user4.printDetails()

ClassPerson.prototype.newFunc = function () {
    console.log('new func')
}

user4.newFunc()