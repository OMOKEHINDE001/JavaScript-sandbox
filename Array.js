//Arrays - complex data types
// [element1, element2, ]

//ARRAY PROPERTIES (length)
console.log(students.length);
// getting elements in an array - position arrName[position]
console.log(students[1]);
//change el in an array
students[0] = "John Doe";
console.log(students);

//ARRAY METHODS
// ADDING AND REMOVING ELS FROM AN Array - Push, pop, shift, unshift
//LIFO

students.push("Theresa");
students.push("Eniola");
students.pop();
students.pop();
console, log(students.pop());

students.unshift("Adedayo");
students.unshift("TIMI");
students.shift();

console.log(students);

//convert arrays to a string - toString, join
console.log(students.toString());
console.log(students.join("-"));

const onlineStudents = ["John", "peter", "Paul"];
const weeklyStudents = ["Ade", "Susan", "Joy"];
const allStudents = onlineStudents.concat(weeklyStudents, ["Ruth", "Gift"]);
console.log(allStudents);

//includes
console.log(onlineStudents.includes("Paul"));

//sort, reverse
const carBrands = ["toyota", "lexus", "bmw", "audi", "chevrolet", "Audi"];
console.log(carBrands);
console.log(carBrands.sort());
console.log(carBrands.reverse());

// extract positions of an array slice - start, end(not included)
const friends = ["ola", "timi", "john", "jane"];
console.log(friends.slice(0, 2));
console.log(friends.slice(1));

//split
let text = "Hello world is fun";
console.log(text.split(" "));
const text2 = "tadapal";
console.log(text2.split("a"));
console.log(text2.split(""));

//hello         - ['h', 'e', 'l', 'l', 'o'] - o l l e h
const reverseStr = (str) => str.split("").reverse().join("");
console.log(reverseStr("hello"));
//push pop unshift shift includes slice sort reverse concat

//HIGHER ORDER ARRAY METHODS - CALLBACK FUNCTIONS, ITERATOR METHODS

//FOR, OF method.

const fruits = ["oranges", "mangoes", "pear", "grapes"];

for (const fruit of fruits) {
  console.log(`${fruit} is something i like`);
  if (fruit === "pear") {
    console.log(`${fruit} is my best fruit`);
  }
}

// find, filter, forEach, map, reduce every some
//FOEEACH - executes a function for each element in an array
const customers = ["kenny", "posi", "timi", "akanni", "jihad"];
customers.forEach((customer, index) => {
  console.log(customer, index);
});

//MAP - creates a new array with transformed element
const nums = [4, 5, 6, 7];
const transformedNums = nums.map((num) => {
  return num * 2;
});
console.log(transformedNums);

// FIND - returns the first matching element in an array
const mySpecialNum = nums.find((num) => {
  return num >= 5;
});
console.log(mySpecialNum);

//FILTER - returns all elements that fits a search condition in an array

const allMyspecialNums = nums.filter((num) => num >= 5);
console.log(allMyspecialNums);

////////// ///// ///// /// ///
let myBalance = 8000;
const transactions = [4000, -125, 10000, -5000, -2000, 1500];

transactions.map((transaction) => {
  if (transaction > 0) {
    console.log(`you have been creditted with ${transaction}naira`);
  } else {
    console, log(`You have been been debited ${transaction}naira`);
  }
});
//getting the balance
transactions.map((transaction) => {
  myBalance += transaction;
});
console.log(myBalance);

const myCreditTransactions = transactions.filter(
  (transaction) => transaction > 0
);
console.log(myCreditTransactions);

//DEBIT
const myDebitTransactions = transactions.filter(
  (transaction) => transaction < 0
);
console.log(myDebitTransactions);

const maxTransaction = 50000;
//find if there is any transaction close to the maxTransaction
transactions.push(100000);

const specialTransaction = transactions.find(
  (transaction) => transaction >= maxTransaction
);
console.log(specialTransaction);

//every and some
//every - checks if all elements satisfy the condition
const ages = [20, 42, 61, 81];
const allAdults = ages.every((age) => age >= 18);
console.log(allAdults);
//some - checks if at least one satisfy the condition
const someChildren = ages.some((age) => age < 18);
console.log(someChildren);

//REDUCE - ACCUMULATING NUMBERS
const cartPrices = [25000, 32000, 15000, 4000];
const carTotal = cartPrices.reduce((prev, curr) => {
  return prev + curr;
});
console.log(carTotal);

//SORT
const peoplesName = ["zigi", "Ademola", "Samson", "Niyi"];
// const atoZ = peoplesName.sort();
// console.log(atoZ);
///
const ztoA = peoplesName.sort((a, b) => b - a);
console.log(ztoA);

////
const prices = [8000, 67000, 464, 5709];
const highesttoLowest = prices.sort((a, b) => b - a);
console.log(highesttoLowest);
