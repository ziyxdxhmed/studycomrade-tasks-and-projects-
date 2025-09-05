// Task 12: String Methods, Implicit Coercion, Objects, and Arrays

// 1. Extract the first five letters from a string.
console.log('--- Task 1: Extract First Five Letters ---');
let myString1 = ' gfuh ieiuei ';
// The .substring() method extracts characters from an index.
// We first use .trim() to remove whitespace.
let firstFiveLetters = myString1.trim().substring(0, 5);
console.log(`Original string: '${myString1}'`);
console.log(`Result: '${firstFiveLetters}'`);


// 2. Get the length of a string and make it uppercase.
console.log('\n--- Task 2: Length and Uppercase ---');
let myString2 = 'hduej dij';
let length = myString2.length;
let upperCaseString = myString2.toUpperCase();
console.log(`Original string: '${myString2}'`);
console.log(`Length: ${length}`);
console.log(`Uppercase: '${upperCaseString}'`);


// 3. Take a string, make it lowercase, and trim it.
console.log('\n--- Task 3: Lowercase and Trim ---');
let myString3 = ' biji jdo ';
let lowerCaseAndTrimmed = myString3.toLowerCase().trim();
console.log(`Original string: '${myString3}'`);
console.log(`Result: '${lowerCaseAndTrimmed}'`);


// 4. Replace a specified word in a string.
console.log('\n--- Task 4: Replace Word ---');
let sentence = 'The quick brown fox jumps over the lazy dog.';
// The .replace() method finds the first match and replaces it.
let newSentence = sentence.replace('dog', 'cat');
console.log(`Original sentence: '${sentence}'`);
console.log(`Sentence with replacement: '${newSentence}'`);


// 5. Random statements in implicit coercion.
console.log('\n--- Task 5: Implicit Coercion ---');
console.log(`Result of 89 + 'hello' + 90 / 9:`);
// Order of operations: Division has higher precedence.
// 90 / 9 = 10
// Then, addition from left to right.
// 89 + 'hello' becomes '89hello' (string concatenation)
// '89hello' + 10 becomes '89hello10' (string concatenation)
console.log(89 + 'hello' + 90 / 9);

console.log(`Result of 100 - '50' + '5'`);
// 100 - '50' becomes 50 (string coerced to number)
// 50 + '5' becomes '505' (number coerced to string)
console.log(100 - '50' + '5');


// --- Objects and Arrays ---
console.log('\n--- Objects and Arrays ---');

// Creating an Object
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isStudent: false
};
console.log(`Object Example:`);
console.log(person);
console.log(`Full Name: ${person.firstName} ${person.lastName}`);

// Creating an Array
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(`\nArray Example:`);
console.log(fruits);
console.log(`First fruit: ${fruits[0]}`);
console.log(`Number of fruits: ${fruits.length}`);