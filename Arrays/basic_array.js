const prompt = require('prompt-sync')();

// Q1. Create an array Create an array containing five programming languages and print it.
const language=["Python", "C++", "Java", "C", "JavaScript"];

// Q2. Access elements
console.log("--------- 5 programming languages ---------");
console.log(language);

// Print the first, third and last elements of the array.
console.log(`First element: ${language[0]}`);
console.log(`Third element: ${language[2]}`)
console.log(`last element; ${language[language.length-1]}`);

// Q3. Update elements Change the second element to "JavaScript".
language[1]="JavaScript";

// Q4. Array length Find and print the total number of elements.
console.log(`The total number elements is ${language.length}`);

// Q5. Array constructor Create an array using new Array() containing five numbers. Print the array.
const numbers=new Array(1,2,3,4,5);
console.log(numbers);

// Q6. Add elements Use push() to add an element at the end and unshift() to add one at the beginning.
numbers.push(6);
numbers.unshift(0);
console.log(`The final an array is ${numbers}`);

// Q7. Remove elements Use pop() and shift() and observe which elements are removed.
numbers.pop();
console.log(`The final an array is ${numbers} using pop()`);
numbers.shift();
console.log(`The final an array is ${numbers} using shift()`);

// Q8. Mini challenge Create a student array containing five names. Print each name using a for loop.
const students_name=new Array("Namjoon", "Jin", "Yoongi", "Jhope", "Jimin", "Tae", "Kookie");
for(let i=0;i<students_name.length;i++){
    console.log(students_name[i]);
}