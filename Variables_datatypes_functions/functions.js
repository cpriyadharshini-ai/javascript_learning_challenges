// Challenge 03: JavaScript Variables
// Topics: let, const, reassignment, arithmetic operations
// Practice: 5 exercises

// Create a function that accepts two numbers and returns their sum.
console.log(`--------- Sum of numbers ---------`);
function add(a,b){
    return a+b;
}
console.log(`Sum of two numbers is ${add(7,7)}`);
console.log();

// Create a function that accepts a person's age and checks whether they are eligible to vote.
console.log(`--------- Vote Eligible ---------`);
function vote_selection(age){
    if(age>=18){
        return 'Eligible';
    }
    else{
        return 'Not Eligible';
    }
}
console.log(`Vote eligible to below 18`);
console.log(`Vote eligible to 17: ${vote_selection(17)}\n`);
console.log(`Vote eligible to 18`);
console.log(`Vote eligible to 17: ${vote_selection(18)}`);
console.log(`Vote eligible to above 18`);
console.log(`Vote eligible to 17: ${vote_selection(50)}`);
console.log();

// Create a function that accepts a name and prints a welcome message.
console.log(`--------- Greeting message ---------`);
function greeting(name){
    return `Hello ${name}`;
}
console.log(greeting("Priya"));
console.log();

// Create a function that calculates the area of a rectangle using length and width.
console.log(`--------- Calculates the area os rectangle ---------`);
function area(l,w){
    return l*w;
}
console.log(`Area of rectangle is ${area(15,30)}`);
console.log();

// Create a function that accepts a number and returns whether it is even or odd.
console.log(`--------- Even or ODD ---------`);
function even_or_odd(num){
    if(num%2===0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}
console.log("14 is even or odd");
console.log(`The number is ${even_or_odd(14)}`);
console.log("7 is even or odd");
console.log(`The number is ${even_or_odd(7)}`);