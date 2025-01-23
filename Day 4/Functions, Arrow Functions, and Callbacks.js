// Function Declaration
function display(name) {
    return `Hello, ${name}`;
}

console.log(display('Augustine'));

// Function Expression
const add = function (num1, num2) {
    return num1 + num2;
};

var result = add(10, 20);
console.log(result);

// Arrow Function (Concise Form)
const sum = (num1, num2) => num1 + num2;

console.log(sum(5, 5));

// Arrow Function with Block Body
const multiply = (num1, num2) => {
    var result = num1 * num2;
    return result;
};

console.log(multiply(3, 4));

// Demonstrating Asynchronous Callback Functions

// Function to simulate data fetching with a callback
function fetchData(callback) {
    console.log("Data fetched!");
    setTimeout(() => {
        callback();
    }, 2000);
}

// Callback function to process data
function processData() {
    console.log("Processing data...");
}

// Fetch and then process data
fetchData(processData);
