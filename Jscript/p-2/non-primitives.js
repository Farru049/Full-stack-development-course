// Object Definition

// Creating an object to represent a user

let username = {
    firstname: "Ali", // Property: firstname
    isValid: true,    // Property: isValid
};


// Accessing and logging object properties

console.log(username.firstname); // Outputs: Ali
console.log(username.isValid);    // Outputs: true


// Creating another user object with different properties

const username1 = {
    firstname1: "Far", // Property: firstname1
    isValid1: true,    // Property: isValid1
};


// Modifying existing properties of the first object

username1.firstname1 = "Mohammad"; // Changing firstname1
username1.lastname = "Ali";         // Adding a new property: lastname


// Accessing and logging updated properties

console.log(username1.firstname1); // Outputs: Mohammad
console.log(username1.isValid1);   // Outputs: true
console.log(username1.lastname);    // Outputs: Ali


// JavaScript Overview: Date, Set, and the new Keyword

// 1. Date Object
// The Date object is used for working with dates and times.

// Creating a Date Object
let currentDate = new Date(); // Current date and time
console.log("Current Date:", currentDate);

// Creating a specific date (YYYY, MM (0-11), DD)
let specificDate = new Date(2024, 0, 1); // January 1, 2024
console.log("Specific Date:", specificDate);

// Methods to get date components
console.log("Year:", currentDate.getFullYear()); // Current year
console.log("Month (0-11):", currentDate.getMonth()); // Current month (0-11)
console.log("Date (1-31):", currentDate.getDate()); // Day of the month (1-31)

// 2. Set Object
// A Set is a collection of values where each value must be unique.

// Creating a Set
let uniqueNumbers = new Set();

// Adding values to the Set
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(2); // Duplicate, will not be added
console.log("Unique Numbers Set:", uniqueNumbers); // Outputs: Set { 1, 2 }

// Checking for existence of values in the Set
console.log("Has 1?", uniqueNumbers.has(1)); // Outputs: true
console.log("Has 3?", uniqueNumbers.has(3)); // Outputs: false

// Removing a value from the Set
uniqueNumbers.delete(1);
console.log("After Deletion:", uniqueNumbers); // Outputs: Set { 2 }

// Iterating through a Set
uniqueNumbers.forEach(value => {
    console.log("Value in Set:", value); // Outputs: 2
});

// 3. The new Keyword
// The new keyword is used to create instances of objects or invoke constructor functions.

// Constructor function for creating a Person object
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating a new instance of Person
let person1 = new Person("Alice", 30);
console.log("Person 1:", person1); // Outputs: Person { name: 'Alice', age: 30 }

// Using new with built-in objects
let dateInstance = new Date(); // Creating a new Date object
console.log("Date Instance:", dateInstance); // Outputs: Current date and time

// Summary
// - Date is used for manipulating dates and times.
// - Set is a collection of unique values.
// - new is a keyword for creating instances of objects.

