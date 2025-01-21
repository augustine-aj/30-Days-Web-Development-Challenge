// Using var
var user = 'Augustine';
console.log(user);

// Using let
let age = 10;
age = 20;
console.log(age);

// Using const
const place = 'Bangalore';
console.log(place);

// Object
let person = {
    name: 'Augustine',
    age: 20 // Use a number type for age instead of a string
};
console.log(person.name);
console.log(person.age);

// If Statements
var num = 10;

if (num > 5) {
    console.log('Number is greater than 5.');
} else {
    console.log('Number is less than or equal to 5.');
}

// Switch Statement
let day = 2;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    default:
        console.log('Other day');
}

// For Loop
for (var i = 1; i <= 5; i++) {
    console.log(i);
}

// While Loop
var i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// Break
for (var i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i);
}

// Continue
for (var i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
