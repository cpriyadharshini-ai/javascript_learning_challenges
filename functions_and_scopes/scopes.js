const prompt = require('prompt-sync')();

// Global Scope: Declare a variable outside a function and access it inside the function.
let name=prompt("Enter your name: ");
function greeting(){
    return "Hi I am "+name;
}
console.log(greeting());


// Local Scope: Declare a variable inside a function and try accessing it outside. Observe the error.
function middle_name(){
    let mid_name=prompt("Enter a middle name: ");
    return `My middle name is ${mid_name}`;
}

console.log(mid_name);


// Block Scope: Create an if block using let and try accessing the variable outside the block.
let age=Number(prompt("Enter your age: "));
if(age>=18){
    let name=prompt("Enter your name: ");
    console.log(`I am ${name}. I am ${age} old.`);
}
console.log(`${name}`);


// Var vs Let: Create variables using var and let inside an if block. Check which variable is accessible outside the block.
let child=Number(prompt("Enter your age: "));
if(child<18){
    let surname=prompt("Enter your surname: ");
    var degree=prompt("Enter your degree: ");
}
console.log(`My degree is ${degree}`);
console.log(`My surname is ${surname}`);


// Lexical Scope: Create an outer function with a variable and an inner function that accesses the outer variable.
function outer(){
    let hobby=prompt("Enter your hobby: ");
    function inner(){
        return `My hooby is ${hobby}`;
    }
    return inner();
}
console.log(outer());

// Scope Challenge: Create two functions with variables having the same name but different values. Print both values and understand how scope works.
function func1(){
    let num=13;
    return num;
}
function func2(){
    let num=12;
    return num;
}
console.log(func1());
console.log(func2());