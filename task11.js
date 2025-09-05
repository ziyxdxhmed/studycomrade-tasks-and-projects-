// Task: Implicit Coercion and Data Types

// --- Implicit Coercion Practice Questions ---

console.log('--- Implicit Coercion Results ---');

// Predict the output for each line
console.log('A' - 1); // Expected: NaN
console.log('A' + 1); // Expected: 'A1'
console.log(2 + '2' + '2'); // Expected: '222'
console.log('hello' + 'world' + 89); // Expected: 'helloworld89'
console.log('hello' - 'world' + 89); // Expected: NaN
console.log('hello' + 78); // Expected: 'hello78'
console.log('78' - 90 + '2'); // Expected: '-122'
console.log(2 - '2' + 90); // Expected: 90
console.log(89 - '90' / 2); // Expected: 44
console.log((true == false) > 2); // Expected: false

// --- Data Types and Explicit Coercion ---

console.log('\n--- Data Types and Explicit Coercion ---');

// Data Types:
let myString = 'Hello, world!'; // String
let myNumber = 123; // Number
let myBoolean = true; // Boolean

console.log(`myString is of type: ${typeof myString}`);
console.log(`myNumber is of type: ${typeof myNumber}`);
console.log(`myBoolean is of type: ${typeof myBoolean}`);

// Explicit Coercion Examples:
let numAsString = String(myNumber);
console.log(`Explicitly converted number to string: ${numAsString} (Type: ${typeof numAsString})`);

let stringAsNumber = Number('123.45');
console.log(`Explicitly converted string to number: ${stringAsNumber} (Type: ${typeof stringAsNumber})`);

let boolFromNumber = Boolean(0);
console.log(`Explicitly converted number (0) to boolean: ${boolFromNumber} (Type: ${typeof boolFromNumber})`);

let numFromBool = Number(true);
console.log(`Explicitly converted boolean (true) to number: ${numFromBool} (Type: ${typeof numFromBool})`);