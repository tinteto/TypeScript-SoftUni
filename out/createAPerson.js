"use strict";
class Person {
    firstName;
    lastName;
    yearsOfage;
    constructor(fName, lName, age) {
        this.firstName = fName;
        this.lastName = lName;
        this.yearsOfage = age;
    }
    introduce() {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.yearsOfage} years old.`;
    }
}
const person = new Person("John", "Doe", 30);
console.log(person.introduce());
//# sourceMappingURL=createAPerson.js.map