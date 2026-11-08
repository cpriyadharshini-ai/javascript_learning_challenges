const prompt = require('prompt-sync')();

// Function Declaration: Create a function that accepts three numbers and returns the largest number.
function largest_number(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }
}
let a=Number(prompt("Enter a first value: "));
let b=Number(prompt("Enter a second value: "));
let c=Number(prompt("Enter a third value: "));
let result=largest_number(a,b,c);
console.log(`The largest number is ${result}`);
console.log(`----------------------------`);

// Function Expression: Create a function expression that calculates the square of a number.
const square=function(num){
    return num * num;
};
let num1=Number(prompt("Enter a first value: "));
let result_of_square=square(num1);
console.log(`Square value of ${num1} is ${result_of_square}`);
console.log(`----------------------------`);

// Arrow Function: Create an arrow function that converts Celsius to Fahrenheit.
const celsiustofahrenheit=(celsius)=>(celsius*9/5)+32;
let celsius_value=Number(prompt("Enter the celsius value: "));
console.log(`The Fahrenheit value of celsius is ${celsiustofahrenheit(celsius_value)}`);
console.log(`----------------------------`);

// Default Parameters: Create a greeting function that accepts a name. If no name is provided, use "Guest" as the default value.
function greeting(name="Guest"){
    return "Hello "+name+"!";
}
let userName=prompt("Enter your name: ");
if(userName=="" || userName==null){
    console.log(greeting());
}
else{
    console.log(greeting(userName));
}
console.log(`----------------------------`);

// Callback Function: Create a function calculate() that accepts two numbers and a callback function. Use callbacks to perform addition and multiplication.
function calculate(a, b, callback) {
    callback(a, b);
}

calculate(12, 2, (a, b) => {
    console.log("Addition:", a + b);
});

calculate(12, 2, (a, b) => {
    console.log("Multiplication:", a * b);
});
console.log(`----------------------------`);

// Higher-Order Function: Create a function that accepts another function as an argument and executes it twice.
function animal(name){
    let message="Hi I am "+name;
    console.log(message);
    return message;
}
function animal_name(func, val){
    func(val);
    func(val);
}
let animals_name=prompt("Enter a animal name: ");
animal_name(animal, animals_name);