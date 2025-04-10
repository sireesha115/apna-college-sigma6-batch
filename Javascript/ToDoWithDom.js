let input=document.querySelector('input');
let btn=document.querySelector('button');
let ul=document.querySelector('ul');

btn.addEventListener('click',addtask);

function addtask(){
    let item=document.createElement('li');
    item.innerText=input.value;

    let delbtn=document.createElement('button');
    delbtn.innerText='delete';
    delbtn.classList.add('delete');
    
    let linebreak=document.createElement('br');
    linebreak.innerText="break";
    linebreak.classList.add('break');

    item.appendChild(delbtn);
    ul.appendChild(linebreak); 
    ul.appendChild(item);
    input.value='';
}

ul.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON'){
        let listItem=event.target.parentElement;
        listItem.remove();
    }

});


// let delbtns=document.querySelectorAll('.delete');
// for(delbtn of delbtns){
//     delbtn.addEventListener('click',function(){
//         // console.log(this);
//             let par=this.parentElement;
//             par.remove();
//         }
//     );
// }

