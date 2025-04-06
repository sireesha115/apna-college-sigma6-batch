// LEVEL 3

// Qs.1

let arr1=[7,9,0,-2];
let n=Number(prompt("Enter a number"));
let arr2=[];
for(let i=0;i<n;i++){
    arr2.push(arr1[i]);
}
console.log(arr2);

//Qs.2

let arr3=[];
for(let i=arr1.length-n;i<arr1.length;i++){
    arr3.push(arr1[i]);
}
console.log(arr3);

// Qs.3

let blankOrNot=prompt("enter a string");
if(blankOrNot.length>0)console.log("String is not blank");
else console.log("String is blank");

// Qs.4

let str=prompt("enter a string");
let index=Number(prompt("Enter the index"));
if(str[index]==str[index].toLowerCase()){
    console.log("character is lowercase");
}
else{
    console.log("character is not a lowercase");
}

// Qs.5

let string=prompt("enter a string");
console.log(`original string:${string}`);
console.log(`String without spaces: ${string.trim()}`);

// Qs.6

let isThereOrNot=[5,2,8,4,2,3,7];
let value=Number(prompt("Enter the value"));
if(isThereOrNot.includes(value))console.log(`${value} is there in array`);
else console.log(`${value} is not there in array`); 