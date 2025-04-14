//LEVEL 4

//Qs.1

let num=2;
let arr=[1,2,3,4,5,6,2,3];
console.log(arr);
while(num){
    arr.pop();
    num--;
}
console.log(arr);

// Qs.2

let n=12345678;
let dummy=n;
let count=0;
while(n>0){
    count++;
    n=Math.floor(n/10);
    // console.log(n);
}
console.log(`No.of digits in ${dummy} is ${count}`);

// Qs.3

n=287152;
let sum=0;
while(n>0){
    ld=Math.floor(n%10);
    sum+=ld;
    // console.log(sum);
    n=Math.floor(n/10);
}
console.log(`Sum =${sum}`);

//Qs.4

n=7;
let fact=1;
while(n>1){
    fact=fact*n;
    console.log(fact);
    n--;
}
console.log(`Factorial= ${fact}`);

//Qs.5

