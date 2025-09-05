// Task 13: Objects, Arrays, and More

// 1. Create objects for animal and car.
console.log('--- Task 1: Objects ---');
let animal = {
    species: 'Lion',
    name: 'Leo',
    habitat: 'Savannah',
    age: 5
};
console.log('Animal Object:', animal);

let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Silver'
};
console.log('Car Object:', car);


// 2. Find the duplicate in a string (optional).
console.log('\n--- Task 2: Find Duplicates (Optional) ---');
let myString = 'hello world';
let charArray = myString.split(''); // Convert string to array of characters
let duplicates = {};
let unique = new Set();
charArray.forEach(char => {
    if (unique.has(char) && char !== ' ') {
        duplicates[char] = (duplicates[char] || 0) + 1;
    } else {
        unique.add(char);
    }
});
console.log(`Original String: '${myString}'`);
console.log('Duplicate characters:', duplicates);


// 3. Reverse a string using array methods.
console.log('\n--- Task 3: Reverse a String ---');
let originalString = 'javascript';
let reversedString = originalString.split('').reverse().join('');
console.log(`Original string: '${originalString}'`);
console.log(`Reversed string: '${reversedString}'`);


// 4. Find the highest and lowest value in an array.
console.log('\n--- Task 4: Highest and Lowest Value ---');
let numbers = [5, 2, 8, 1, 9, 3];
let highest = Math.max(...numbers);
let lowest = Math.min(...numbers);
console.log('Original Array:', numbers);
console.log('Highest value:', highest);
console.log('Lowest value:', lowest);


// 5. Sorting of an array (optional).
console.log('\n--- Task 5: Sorting an Array (Optional) ---');
let unsortedArray = [5, 2, 8, 1, 9, 3];
unsortedArray.sort((a, b) => a - b); // Sorts numerically in ascending order
console.log('Sorted Array:', unsortedArray);


// 6. Display first 3 elements in an array.
// This part is for the UI, but we'll simulate it in the console.
console.log('\n--- Task 6: Display First 3 Elements ---');
let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
let firstThree = fruits.slice(0, 3);
console.log('Original Array:', fruits);
console.log('First 3 elements:', firstThree);


// 7. Remove the 4th (index) element and add 2 new elements.
console.log('\n--- Task 7: Remove and Add Elements ---');
let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple'];
console.log('Original Array:', colors);
// .splice(startIndex, deleteCount, item1, item2, ...)
colors.splice(4, 1, 'Cyan', 'Magenta');
console.log('Modified Array:', colors);


// --- Date and Math Objects ---
console.log('\n--- Date and Math Objects ---');
// Date Object
let now = new Date();
console.log('Current Date and Time:', now);
console.log('Current Year:', now.getFullYear());

// Math Object
console.log('Random number (0-1):', Math.random());
console.log('Round 4.7:', Math.round(4.7));
console.log('PI:', Math.PI);


// --- Functions, Scope, and Events ---
console.log('\n--- Functions, Scope, and Events ---');

// Function Definition
function greet(name) {
    let message = 'Hello, ' + name + '!'; // Local Scope
    console.log(message);
}

// Function Call
greet('Alice'); // 'Alice' is passed as an argument

// Global Scope
let globalVar = 'I am a global variable.';

function checkScope() {
    let localVar = 'I am a local variable.'; // Local Scope
    console.log('Inside function:', globalVar);
    console.log('Inside function:', localVar);
}

checkScope();
console.log('Outside function:', globalVar);
// console.log('Outside function:', localVar); // This would cause an error (ReferenceError)

// Note: Events (like clicking a button) are browser-based and cannot be demonstrated in a Node.js console script.