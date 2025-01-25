// Class Definition for Person
class Person {
    constructor(name, age) {
        this.name = name; 
        this.age = age;  
    }

    display() {
        console.log(`Hi ${this.name}, you are ${this.age} years old.`);
    }
}

// Create an instance of Person
const augustine = new Person('Augustine', 20);
augustine.display();

// Class Definition for Animal
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Class Definition for Dog (inherits from Animal)
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Create an instance of Dog
const myDog = new Dog('Bruno');
myDog.speak()

// Import mathOperations module (CommonJS style import)
const math = require('./mathOperations');

// Use imported functions
console.log(math.add(10, 10));  
console.log(math.subtraction(20, 10));
console.log(math.multiply(5, 5))
