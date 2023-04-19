"Use strict";

// Named function
const  sum = function(a, b) {
    return a + b;
}

// Anonymous function
const details = function(name, age, address){
    return `My name is ${name} and I am ${age} years old\nI come from ${address}`

}
console.log(details('Sameuel', 21, 'Bungoma'))

// Arrow functions
let greetings = (name)=>{
    return `Good morning, ${name}`
}
console.log(greetings(`Sam`))

// Callback functions
function Division (a,b, Output) {
    var result = a/b
    Output(`Result : ${result}`)
}
Division(8,4, function(result){
    console.log(result)
})