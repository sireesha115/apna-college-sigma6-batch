// Qs.1

let arr=[1,2,3,4,5,6,7,8,9];
const arrayAverage=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
       sum+=arr[i]; 
    }
    return sum/arr.length;
}
console.log(`Average of ${arr} is ${arrayAverage(arr)}`);

// Qs.2

let num=9;
const isEven=(num)=>{
    if(num%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}
console.log(`Number: ${num} is ${isEven(num)}`);

