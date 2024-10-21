/*
DATATYPES in JavaScript:

1. Primitive Data Types:
   - String: Represents textual data.
   - Number: Represents both integer and floating-point numbers.
   - Boolean: Represents true or false values.
   - Bigint: Represents integers with arbitrary precision.

2. Special Types:
   - Undefined: A variable that has been declared but not assigned a value.
   - Null: Represents the intentional absence of any object value.

3. Reference Data Types:
   - Object: A collection of key-value pairs.
   - Symbol: A unique and immutable value primarily used as object property keys.
*/

// Example of different data types

// Number
let score = 102; // Numeric value

// String
let name = 'Farru'; // Textual data

// Boolean
let isLoggedIn = false; // Represents login status

// Object - Array
let teaTypes = ['lemon tea', 'orange tea', 'boost tea']; // Array of strings representing different tea types

// Object - User
let user = {
    first: 'Farru',
    last_name: 'Ali'
}; // Object representing a user with first and last name

// Output to console for verification
console.log('Score:', score);              // Outputs: Score: 102
console.log('Name:', name);                 // Outputs: Name: Farru
console.log('Is Logged In:', isLoggedIn);   // Outputs: Is Logged In: false
console.log('Tea Types:', teaTypes);        // Outputs: Tea Types: ['lemon tea', 'orange tea', 'boost tea']
console.log('User:', user);                  // Outputs: User: { first: 'Farru', last_name: 'Ali' }
