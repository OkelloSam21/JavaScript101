"Use strict";

var x = 5;
let y = 7;
const PI = 3.142;

console.log('Hello world')
//Variables naming
let  countryName = "Kenya" 
let fullName = "Samuel Okello"

console.log('My name is ' + fullName + ' and am from ' + countryName)

//Operations in javascript
let a = 10
let b = 5
console.log('a = ' + a + '\nb =  ' + b)
console.log('a * b : ' + (a+b))// Addition
console.log('a - b : ' + (a-b))// Subtraction
console.log('a * b : ' + (a*b))// Multiplication
console.log('a / b : ' + (a/b))//division
console.log('a % b : ' + (a%b))//remainder

//operators in JavaScript
let age = 21
let myAge = '21'
let myname = 'Sam' // ' = ' is an assignment operator
age++
console.log(age)

 console.log('age == myAge : ' + age == myAge)   // ' == ' is an equality operator
 console.log('age ===  myAge : ' + age === myAge) 



 // Comparison operator
 console.log( 'a > b : ' + (a > b )) 
 console.log( 'a < b : ' + (a < b )) 
 console.log( 'a >= b : ' + (a >= b )) 
 console.log( 'a <= b : ' + (a <= b ))
 console.log( 'a != b : ' + (a >= b ))

 //Other operators OR (||) AND (&&) NOT (!)
 let num01 = 5, num02 = 10;

let result1 = (num01 != num02) && (num01 < num02); // returns true

let result2 = (num01 > num02) || (num01 == num02); // returns false

let result3 = (num01 < num02) || (a == b); // returns true

let result4 = !(num01 < num02); // returns false

let result5 = !(num01 > num02); // returns true

// store results in an array
let results = [  (num01 != num02) && (num01 < num02),  (num01 > num02) || (num01 == num02),  (num01 < num02) || (a == b),  !(num01 < num02),  !(num01 > num02)];
console.log(`Results for logical operators`)
//use for loop to print results
for (let i = 0; i < results.length; i++) {
  console.log(`result${i+1}: ${results[i]}`);
}
