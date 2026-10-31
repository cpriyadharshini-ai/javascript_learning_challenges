// Challenge 02: JavaScript Variables
// Topics: let, const, reassignment, arithmetic operations
// Practice: 5 exercises

// Create variables containing String, Number, Boolean, Undefined, and Null values. Print their types using typeof.
let string="String";
let number=2;
let boolean=true;
let undefined;
console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof undefined);
console.log(typeof null);
console.log();

// Create an array containing five programming languages. Print the first and last elements.
const arr=["Java", "Python", "C++", "C", "JavaScript"];
console.log(`--------- First element ---------`);
console.log(arr[0]);
console.log(`--------- Last element ---------`);
console.log(arr[arr.length-1]);
console.log();

// Create an object containing student details: name, age, department, and CGPA. Print each property.
const student={
    'name':'Chandrapriyadharshini',
    'age':2,
    'department':'AIML',
    'CGPA':7.73
};
console.log(`--------- Object property ---------`);
console.log(student.name);
console.log(student.age);
console.log(student.department);
console.log(student.CGPA);

// Create two variables: "25" and 25. Compare them using == and ===. Explain the difference in comments.
let str="25";
let num=25;
console.log(`--------- Comparison ---------\n\nIt's checks the data only.`);
console.log(str==num);
console.log(`It's checks the data and memory address too.`)
console.log(str===num);

// Create an array of three employee objects. Print the name of the second employee.
const employee=[
    {
        'name':'Chandra',
        'experience':2
    },
    {
        'name':'Chandrapriya',
        'experience':3
    },
    {
        'name':'Priyadharshini',
        'experience':4
    }
];
console.log(employee[1].name);