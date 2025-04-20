// Using express

const express = require('express');
const app = express();

// console.dir(app);

let port = 8080;//3000

// listening for incoming request
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});


// sending response
// app.use((req,res)=>{
//     console.log("request recieved");
//     let code="<h1>Fruits</h1><ul><li>Apple</li><li>mango</li><li>grapes</li></ul>"
//     res.send(code);
// });


// matching response with routes
app.get("/",(req,res)=>{
    res.send("you contacted root path");
});  ////http://localhost:8080

app.get("/apple",(req,res)=>{
    res.send("you contacted apple path");
});  //http://localhost:8080/apple

app.get("/orange",(req,res)=>{
    res.send("you contacted orange path");
}); 

app.get("/fruits",(req,res)=>{
    res.send("you contacted fruits path");
});  //http://localhost:8080/fruits

// app.get("*",(req,res)=>{
//     res.send("this path does not exist");
// }); 

app.post("/",(req,res)=>{
    res.send("you sent a post request to root");
});

// path parameters

app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    // res.send("hello i'm root");

    let {username,id}=req.params;
    // res.send(`Welcome to the page of @${username}`); // Only one response is allowed per request!

    let code=`<h1>Welcome to the page of @${username}</h1>`;

    res.setHeader('Content-Type', 'text/html');
    res.send(code);
});

// query strings

app.get("/search",(req,res)=>{
    console.log(req.query);  //http://localhost:8080/search?q="apple"&color="green"
    // res.send("no results");

    let {q}=req.query;
    // res.send(`search results for query : ${q}`);
    res.send(`<h1>search results for query : ${q}</h1>`);
});