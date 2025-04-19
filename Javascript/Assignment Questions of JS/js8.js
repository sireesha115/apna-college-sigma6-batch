// QS.1

console.log("QUESTION 1");
let arr=[2,4,6,1,7,8];

const sum=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
const square=(arr)=>{
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]*arr[i]);
    }
}
square(arr);
console.log(`Sum of array elements is: ${sum(arr)}`);
console.log(`average of array elements are : ${sum(arr)/arr.length}`);

// QS.2

console.log("QUESTION 2");

let newarr=[4,6,2,7,9,2,7,8];

let mapArr=newarr.map((num)=>{
    return num+5;
});

console.log(`Old arr =${newarr}`);
console.log(`Map array =${mapArr}`);

//Qs.3

console.log("QUESTION 3");

let stringarr=['siri','baby','laddu','kitty','muni','loki'];

let upperarr=stringarr.map((word)=>{
    return word.toUpperCase();
});

console.log(`Original array ${stringarr}`);
console.log(`Capital array ${upperarr}`);


// QS.4

console.log("QUESTION 4");

function doubleAndReturnArgs(arr,...args){
    let newarr=arr.concat(...args);
    return newarr;
}
let arr1=[5,3,7,8,2,9];
console.log(doubleAndReturnArgs(arr1,8,3,9,0,1,5,2));
console.log(doubleAndReturnArgs(arr1,4,6,2,7,9,2,7,8));

// QS.5

console.log("QUESTION 5");

let obj1={
    'a':'siri',
    'b':'baby',
    'c':'laddu'
};
let obj2={
    'd':'muni',
    'e':'kitty',
    'f':'loki'
};

// function mergeObjects(obj1,obj2){
//     // return obj1.concat(obj2);
//     return {...obj1,...obj2};
// }

// // let mergedObjects={...obj1,...obj2};


const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});

console.log(`Object 1 ${JSON.stringify(obj1)}`);
console.log(`Object 2 ${JSON.stringify(obj2)}`);

console.log(mergeObjects(obj1,obj2));

