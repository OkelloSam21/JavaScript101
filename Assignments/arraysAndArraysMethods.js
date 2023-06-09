// Write code showing how the following array methods work and share a screenshot of your working 
// Splice  indexOf forEach Map Join Sort Shift Unshift Pop Push Slice

// Craete and Intialize an array

const array  = ["Javascript", "Html", "Css", "Java"]

// Slice 

let slice = array.slice(1)
console.log(slice)  // [ 'Html', 'Css', 'Java' ]

// indexOf - returns the first index of occurance of an array element or -1
    const num = new Array(1,2,4,5,1,4)
    let index = num.indexOf(2)
    console.log(index) // 0

// forEach
function printArrayElements (element, index) {
    console.log("Array element " + index + " : "+element )
}

array.forEach(printArrayElements)

// Map
    function sqr(num) {
        return num * num 
    }

    let result = num.map(sqr)
    console.log(result)

// Join
    let greetings = ["Hello", "How","are","you ?"]
    let joinedGreetings = greetings.join(" ")
    console.log(joinedGreetings)

// Sort
    let sortednum = num.sort()
    console.log(sortednum)

//Shift
    let first = array.shift()
    console.log(first)
    console.log(array)

// Unshift
    let last = array.unshift("Pearl")
    console.log(last)
    console.log(array)

// pop
    let POP = array.pop()
    console.log(POP)

// push
let city = ["Nairob", "Kisumu", "Nakuru"];

// add "Mombasa" to the array
city.push("Mombasa");

console.log(city);

// splice
let prime_numbers = [2, 3, 5, 7, 9, 11];

// replace 1 element from index 4 by 13
let removedElement = prime_numbers.splice(4, 1, 13);
console.log(removedElement);
console.log(prime_numbers);
