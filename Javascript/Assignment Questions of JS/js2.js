console.log("hello world");

//Level 2
/*Qs1. Create a number variable num with some value.Now, print “good” if the number is divisible by 10 and print “bad” if it is not*/

let num=50;
if(num%10===0){
    console.log("Good");
}
else{
    console.log("Bad");
}

//Qs.2

let name=prompt("Enter your name:");
let age=prompt("Enter your age");
alert(`${name} is ${age} years old`);

// Qs.3

num=Number(prompt("Enter value from 1-4"));
switch(num){
    case 1:console.log("January,Febrauary,March");
    break;
    case 2:console.log("April,May,June");
    break;
    case 3:console.log("July,August,September");
    break;
    case 4:console.log("October,November,December");
    break;
    default:console.log("Enter valid number from 1-4");
}

//Qs.4

let gStr=prompt("Enter the String");
if((gStr[0]==='A'||gStr[0]==='a' )&& gStr.length>5){
    console.log(`${gStr} is golden string`);
}
else{
    console.log(`${gStr} is not a golden string`);
}

//Qs.5

let num1=prompt("Enter the first number");
let num2=prompt("Enter the second number");
let num3=prompt("Enter the third number");
console.log(`Number1: ${num1}\nNumber2: ${num2}\nNumber3: ${num3}`)
if(num1>num2){
    if(num1>num3)console.log(`Number 1: ${num1} is greater`);
    else console.log(`Number 2: ${num2} is greater`);
}
else if(num2>num3){
    console.log(`Number 2 : ${num2} is greater`);
}
else{
    console.log(`Number 3: ${num3} is greater`);
}
 

