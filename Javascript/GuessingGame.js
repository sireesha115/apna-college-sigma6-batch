const max=prompt("Enter the max number");

const random=Math.floor(Math.random()*max)+1;

let guess=prompt("guess the number");
while(true){
    if(guess==random){
        console.log('you are right congratulations random number was '+random);
        break;
    }
    else if(guess<random){
        guess=prompt('your guess was too small please try again!!');
    }
    else if(guess>random){
        guess=prompt('your guess was too large please try again!!');
    }
    else{
       guess= prompt("Your guess was wrong. Please try again !!");
    }
    if(guess =='quit'){
        console.log('user quit');
        break;
    }
}
