//Qs.1
let arr=[1,2,3,7,3,5,7];
console.log(`Max of ${arr} is ${larger(arr)}`);

function larger(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max)max=Math.max(arr[i],max);
        // console.log(max);
    }
    return max;
}

// Qs.2

let str="abcdabcdefgggh";
console.log(`unique string of ${str} is ${unique(str)} `);

function unique(str){
    let res="";
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(res.indexOf(char)==-1){
            res+=char;
        }
    }
    return res;
}

// Qs.3

let country=["Australia","Germany","United States of America"];
console.log(`longest string of ${country} is ${longcountry(country)}`);

function longcountry(country){
    let max=0;
    let str;
    for(let i=0;i<country.length;i++){
        let len=country[i].length;
        if(len>max){
            max=Math.max(max,len);
            str=country[i];
        }
    }
    return str;
}

// Qs.4

str='Australia';
console.log(`No.of vowels in ${str} is ${countvowels(str)} `);
function countvowels(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'){
            count++;
            console.log(str[i]);
        }
    }
    return count;
}

// Qs.5

let start=Number(prompt("Enter starting value"));
let end=Number(prompt("Enter ending value"));
console.log(`Random number from ${start} to ${end} is ${range(start,end)}`);
function range(start,end){
    let n=end-start;
    return Math.floor(Math.random()*n)+start;
}