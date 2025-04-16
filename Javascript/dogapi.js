let url="https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let image=await getImage();
    let img=document.querySelector("#result");
    img.setAttribute("src",image);
    console.log(image);
});

async function getImage() {
    try{
        let res=await axios.get(url);
        return res.data.message;
    }
    catch(err){
        console.log("Error--",err);
        return "no image found";
    }
}