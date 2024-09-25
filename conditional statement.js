// conditional statement
// control

const myBalance = 3000;
const transaction = 3000;

// if statement
// //  if(condition){
// // lines of code
// }

if (true) {
  console.log("yes");
}

if (myBalance >= transaction) {
  console.log("Transaction successful");
}

// 18+
const age = 18;
if (age >= 18) {
  console.log("you are eligible to vote");
}

//  if the length of the password is 7 and above has @ - good passworld
const password = "ejjdndnkakax@";
if (password.length >= 7 && password.includes("@")) {
  console.log("Good password");
}

// If else statement
// if(condition){
//first action
//}else{
//secon action
//}

const age2 = 15;
//eligible 18+ or not

if (age2 >= 18) {
  console.log("you are eligible to vote");
} else {
  console.log("you are ineligible to vote, you must be 18+");
}

// youth/underagem 0-40  or aged 41+

const age3 = 40;
if (age3 >= 0 && age3 <= 40) {
  console.log("you are in the youth/underage category");
} else {
  console.log("you are in the aged category");
}

//write an if else statement to chech if a number is even or odd and log to the console

let num = 10;
if (num % 2 === 0) {
  console.log(`${num} is even.`);
} else {
  console.log(`${num} is odd`);
}

//declare two variables. 1. savings 2. transactioAmount

const savings = 50000;
const transactionAmount = 20000;

if (savings >= transactionAmount) {
  console.log("Transaction successful");
} else {
  console.log("Insuficient funds");
}

// multiple conditions - ELSE IF statement
// positive > negative < zero 0
let myNum = 90;
if (myNum > 0) {
  console.log("This is a positive number");
} else if (myNum < 0) {
  console.log("This is a negative number");
} else {
  console.log("This is zero");
}

// underage 0-12 teens 13-19 adults 20-40 aged 41
//first alternative

let age4 = 25;
if (age4 <= 12) {
  console.log("Underage");
} else if (age4 <= 19) {
  console.log("Teens");
} else if (age4 <= 40) {
  console.log("Adults");
} else if (age4 >= 41) {
  console.log("Aged");
} else {
  console.log("Invalid age, try again");
}

//second alternative
// underage o-12 teens 13-19 adults 20-40 aged 41
const age6 = 50;

if (age6 >= 0 && age6 <= 12) {
  console.log("underage");
} else if (age6 >= 13 && age6 <= 19) {
  console.log("teens");
} else if (age6 >= 20 && age6 <= 40) {
  console.log("Adults");
} else if (age6 >= 41 && age6 <= 60) {
  console.log("Aged");
} else {
  console.log("invalid age, try again");
}


/////////////

switch (grade) {
  case "A":
  case "a":
    console.log("Excellent");
    break;
  case "B":
  case "b":
    console.log("Very Good");
    break;
  case "C":
  case "c":
    console.log("Good");
    break;
  case "D":
  case "d":
    console.log("Fair");
    break;
  case "E":
  case "e":
    console.log("Poor");
    break;
  case "F":
  case "f":
    console.log("Failed");
    break;
  default:
    console.log("ivalid grade");
}
