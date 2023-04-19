"Use strict";
// for loop
for (var i = 0; i <= 5; i++){

}

// while loop
let done = false;
while (!done){
    console.log("I am a software developer!");
    done = true;
}

// do while loop
let Done = false;
do{
    console.log(`software developer`)
}while(Done);

// simple if statement
if(16 == "16"){
    console.log("I am a software developer2")
}

// if else statement
if(16 == `13`){
    console.log("I am a software developer!!!")
}else{
    console.log("I am a not a software developer")
} 

// nested if-else statements
let gender = `male`
if (gender == "male"){
    console.log(`MALE`)    
} else if (gender == "female") {
    console.log(`FEMALE`)
}else{
    console.log(`INVALID`)
}

// Switch statement
const Option = prompt("Enter an option")

switch (Option) {
    case 1:
        console.log(`Welcome`)
        alert(`Welcome`)
        break;

    default:
        console.log(`Bye`)
        break;
}