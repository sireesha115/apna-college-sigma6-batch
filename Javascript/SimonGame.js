let gameSeq=[];
let userSeq=[];
let btns=['green','red','yellow','blue'];

let highscore=0;

let started=false;
let level=0;
let h2=document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(started==false){
        started=true;
        levelup();
    }
});


function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}

function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level}`;

    let idx=Math.floor(Math.random()*4);
    let randColor=btns[idx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(`Game seq:${gameSeq}`);
    gameFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{


        h2.innerHTML=`Game over !Your score was <b>${level}</b><br>Your Highest score was ${highscore}<br> Press any key to start ...`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },150);
        
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(`User seq:${userSeq}`);

    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    if(level>highscore){
        highscore=level;
    }
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

