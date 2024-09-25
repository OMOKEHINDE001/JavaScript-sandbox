//determine whether variablews should be const or let
// create a variable named my country, set it to whatever value
//create a variable called my age, set it to your value
// create a variable called fullName and set it to any value
//log the length of your country as well as the length
//

//convert the fullName to all upperCase
//extract just the first name in your full  name and log it to the console
//write a short description of the person in this format
//e.g peter pan is a citizen of portugal

//increase the age declared above by 1

//log the remainder of when 100 is divided by 7 to the console
// chech whether the country variable starts with

const myCountry = "Nigeria";
let myAge = 50;
const fullName = "khenny lee";
console.log(myCountry.length);
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.slice(0, 6));

const description = `${fullName} is a citizen of ${myCountry}`;
console.log(description);

myAge++;
console.log(myAge);

console.log(100 % 7);



////////////////////////

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

