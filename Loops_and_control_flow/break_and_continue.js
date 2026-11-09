const prompt = require('prompt-sync')();

// Break challenge print numbers from 1 to 20, but stop the loop when the number reaches 12.
let n=Number(prompt("Enter a n value: "));
for(let i=0;i<n;i++){
    console.log(i);
    if(i===12){
        console.log(`Loops reaches ${i}`);
        break;
    }
}

// Continue challenge print numbers from 1 to 20, but skip multiples of 3.
let num=Number(prompt("Enter a num value: "));
for(let i=0;i<num;i++){
    if(i%3===0){
        console.log(`Loops reaches ${i} skip the current iteration`);
        continue;
    }
    console.log(i);
}

// Use a loop to find 40. Once found, stop the loop using break.
const numbers = [10, 20, 30, 40, 50, 60];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]===40){
        console.log(`40 found in numbers[${i}]`);
        break;
    }
}

// Student grade calculator

// Get marks from the user and display:
// - 90–100: Grade A
// - 80–89: Grade B
// - 70–79: Grade C
// - 60–69: Grade D
// - Below 60: Fail
// - Outside 0–100: Invalid marks
let mark=Number(prompt("Enter you mark: "));
if(mark<0 || mark>100) {
    console.log("Invalid marks");
}
else if(mark>=90 && mark<=100){
    console.log("Grade A");
}
else if(mark>=80 && mark<90){
    console.log("Grade B");
}
else if(mark>=70 && mark<80){
    console.log("Grade C");
}
else if(mark>=60 && mark<70){
    console.log("Grade D");
}
else{
    console.log("Fail");
}

// Number classification
// Get a number and identify whether it is:
// - Positive
// - Negative
// - Zero
// Also check whether it is even or odd (for non-zero numbers).
let number=Number(prompt("Enter a number: "));
if(number===0){
    console.log("Number is zero");
}
else if(number>0){
    console.log("Positive number");
    if(number%2==0){
        console.log("Also even number");
    }
    else{
        console.log("Also odd number");
    }
}
else if(number<0){
    console.log("Negative number");
    if(number%2==0){
        console.log("Also even number");
    }
    else{
        console.log("Also odd number");
    }
}