const prompt = require('prompt-sync')();

// Q1. Print numbers
// Use a for loop to print numbers from 1 to 20.
for(let i=1;i<=20;i++){
    console.log(i);
}

// Q2. Even numbers
// Use a while loop to print all even numbers between 1 and 50.
let i=1;
while(i<=50){
    if(i%2==0){
        console.log(i);
    }
    i++;
}

// Q3. Multiplication table
// Get a number from the user and print its multiplication table up to 10.
let table_number=Number(prompt("Enter a table number: "));
for(let i=1;i<=10;i++){
    console.log(`${i} * ${table_number} = ${i*table_number}`);
}

// Q4. Sum of numbers
// Get a number n and calculate the sum from 1 to n.
let num=Number(prompt("Enter a n value: "));
let j=1;
let sum=0;
while(j<=num){
    sum=sum+j;
    j++;
}
console.log(`Sum of 1 to ${num} is ${sum}`);

// Q5. Reverse counting Use a do...while loop to print numbers from 10 down to 1.
let k=10;
do{
    console.log(k);
    k--;
}while(k>0)