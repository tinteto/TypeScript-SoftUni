class Person {
firstName: string;
lastName: string;
yearsOfage: number;

constructor(fName: string, lName: string, age: number) {
    this.firstName = fName;
    this.lastName = lName;
    this.yearsOfage = age;
}

introduce(): string {
    return `My name is ${this.firstName} ${this.lastName} and I am ${this.yearsOfage} years old.`
}
}


const person = new Person("John", "Doe", 30);
console.log(person.introduce());