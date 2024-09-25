// DATA TYPES 1. Primitive 2. Complex
// Primitive strings- "", number- 123, boolean- true/false, null, undefined
// Complex object, arrays

// STRINGS- text characters quotation marks '' ""
const firstName = "John";
const lastName = "Doe";
console.log(firstName);
console.log(lastName);

// String properties length, concatenation(joining), Methods
// string.lengthy
console.log(firstName.length);
console.log(lastName.length);

// string concatenation
// const fullName = firstName + lastName;
const fullName = firstName + " " + lastName
console.log (fullName,length);

// String METHODS - functions that can be performed on strings
// toUpperCase, toLowerCase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
// replace, replaceALL
console.log(fullName.replace("o","*"));
// console.log(fullName.replaceALL("John", "kenny"));
// Includes
console.log(fullName.includes("y"));
// startsWith, endWith
console.log(fullName.startsWith("JO"));
console.log(fullName.endsWith("e"));

const myEmail = "uthmanabdullah2011@gmail.com";
console.log(myEmail.length);
console.log(myEmail.toUpperCase());
console.log(myEmail.includes("e"));
console.log(myEmail.endsWith("google.com"));

// indexof, lastIndexOf
console.log(myEmail.indexOf("a"));
console.log(myEmail.lastIndexOf("a"));

console.log(myEmail.charAt(5))

// concat (joining)
console.log(myEmail.concat("kehindeeee"));

// The book Americanah written by Ngozi Adichie in year 2016
// const description = "The book " + bookTitle + " written by " + author + " was published in the year " + yearPublished;

// console.log(description);

// template literals - allows us to format variables into strings

// backticks `the book ${bookTitle}`
const name1 = "Ade";
const name2 = "Wale2";
// Ade is a a boy
const sentence = `%{name1} is a boy`;
// His name is Wale
const sentence2 = `His name is ${name2}`;


// Tinibu said and i quote 'let the poor breathe'
const quote = `Tinubu said and i quote "let the poor breate"`;
console.log(quote);





// Trimming
const userName ="       user001     "
console.log(userName.length);
console.log(userName.trim());

// trimStart, trimEnd
console.log(userName.trimStart());
console.log(userName.trimEnd());

// extract portions of a string
// slice, substring, substr
// slice, substring( start, where to end)
const surname ="sandler";
console.log(surname.slice(0,4));
console.log(surname.substring(1, 4));
// substr (start, number of characters we want)
console.log(surname.substr(0, 5));







