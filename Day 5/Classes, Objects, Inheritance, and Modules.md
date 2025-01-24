# Day 5: Classes, Objects, Inheritance, and Modules

## Overview 🎓
On Day 5, we dive into some of the most important concepts of object-oriented programming (OOP) and modular design in JavaScript:
1. Classes and Objects.
2. Inheritance.
3. Modules and their usage in Node.js.

---

## **Classes and Objects** 🏗️
### **What are Classes?**
Classes are blueprints for creating objects, encapsulating data (properties) and methods.

<div align="center">
    <img src="../resources/images/class and objects.jpg" alt="Node Express Image" width="500" />
</div>

### **Creating a Class**
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const john = new Person("John", 25);
console.log(john.greet());
```

---

## **Inheritance** 👨‍👩‍👦
Inheritance allows one class to extend another, sharing its properties and methods.

<div align="center">
    <img src="../resources/images/inheritance.jpg" alt="Node Express Image" width="500" />
</div>

### **Syntax and Example**
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog("Buddy");
myDog.speak();
```

Here:
- `Animal` is the parent class.
- `Dog` is the child class, inheriting properties and methods from `Animal` while overriding the `speak` method.

---

## **Modules** 📦
Modules are reusable blocks of code that you can import or export across files in a Node.js application.

### **Exporting a Module**
File: `mathOperations.js`
```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };
```

### **Importing a Module**
File: `app.js`
```javascript
const math = require("./mathOperations");

console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(5, 3)); // Output: 2
```

### **ES6 Modules**
For ES6-style imports and exports:

**Export**
```javascript
export function multiply(a, b) {
  return a * b;
}
```

**Import**
```javascript
import { multiply } from './mathOperations.js';
console.log(multiply(2, 3));
```

---

## Summary 🧾
By the end of Day 5, you will:
1. Understand how to use classes and create objects in JavaScript. 🏗️
2. Implement inheritance to extend functionality. 🌟
3. Work with modules to organize and reuse code efficiently in Node.js. 📦

Tomorrow, we will explore **Event Handling in Node.js**. Stay tuned! 🚀

