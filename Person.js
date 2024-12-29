class Person {
    constructor(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    displayDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Address: ${this.address}`;
    }
}

// Example usage:
const person = new Person("John Doe", 30, "Male", "123 Street, City");
console.log(person.displayDetails());
