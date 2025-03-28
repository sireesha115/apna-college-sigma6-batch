let todo=[];
let req=prompt("Please enter your request");
while(true){
    if(req=="list"){
        console.log("----------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("----------------");
    }
    else if(req=='add'){
         todo.push(prompt('Please enter the task you want to add'));
        console.log("Task added");
    }
    else if(req=='delete'){
        let index=prompt('please enter the task of index');
        todo.splice(index,1);
        console.log('Task is deleted');
    }
    else if(req="quit"){
        console.log("Quitting app!!");
        break;
    }
    else{
        console.log("Enter valid request");
    }
     req=prompt("Please enter your request");
}