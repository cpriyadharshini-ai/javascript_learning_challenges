// Challenge 01: JavaScript Variables
// Topics: let, const, reassignment, arithmetic operations
// Practice: 5 exercises

/*Declare your name, age, and college using let and print them.*/
let name="Chandrapriyadharshini C";
let age=20;
let college="Saveetha Engineering College, Chennai";
console.log(`--------- My details ---------`);
console.log(`Hello, ${name}\nI am ${age}.\nI am currently studying in ${college}\n`);

/*Declare two numbers using const. Calculate their sum, difference, product, and division.*/
const a=10;
const b=12;
console.log(`--------- Arithmatic operations ---------`);
console.log(`Sum of a+b is ${(a+b)}\nDifference of a-b is ${(a-b)}\nProduct of a*b is ${(a*b)}\nDivision of a/b is ${(a/b)}\n`);

/*Create a variable called studentName. Change its value and print both the old and new values (think about how to do this).*/
console.log(`--------- Old and new values ---------`);
let studentName="Chandrapriyadharshini C";
console.log(studentName);
studentName="Priyadharshini";
console.log(studentName);
console.log();

/*Declare a variable without assigning a value. Print its output.*/
console.log(`--------- Without assigning a value ---------`);
let x;
console.log(x);
console.log();

/*Create a simple employee profile using variables: name, salary, department, and experience.*/
let emp_name="Employee";
let emp_salary=25000;
let department="AI";
let experience=3;
console.log(`--------- Employee Details ---------`);
console.log(`Name ${emp_name}\nSalary: ${emp_salary}\nDepartment: ${department}\nExperience: ${experience}\n`)