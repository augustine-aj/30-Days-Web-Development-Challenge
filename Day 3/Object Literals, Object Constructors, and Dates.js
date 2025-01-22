// Creating an Object
const person = {
    name: 'Augustine',
    age: 20,
    place: 'Bangalore'
};

console.log(person);

// Accessing Object Properties
console.log(person.name);
console.log(person.age);  

// Adding a New Property
person.status = true;

console.log(person);

// Adding a Function to the Object
person.display = function() {
    console.log('Name: ' + this.name + ', Age: ' + this.age);
};

console.log(person);
person.display(); 

// Object Constructors
function Person(name, age, place) {
    this.name = name;  
    this.age = age;   
    this.place = place;
}

// Creating Objects
let person1 = new Person('Person', 30, 'Bangalore');
let person2 = new Person('Person2', 40, 'Mumbai');

console.log(person1);
console.log(person2); 

// Dates
const now = new Date(); 
console.log(now);

let stringDate = new Date('2000-03-15'); 
console.log(stringDate);

let customDate = new Date(2015, 3, 25); 
console.log(customDate);

let toStringDate = new Date();
console.log(toStringDate.toString()); 
