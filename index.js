let value="india";
play();
let xyzval;
function xyz(xyzval)
{   document.getElementById("preloading").style.display="none";
    document.getElementById("api").innerHTML=" "
   value=xyzval;
   play(); 
}
function play(){
let file = `https://inshorts.deta.dev/news?category=${value}`
fetch(file)
.then(x=>x.text())
    .then(y1 =>{
        console.log(JSON.parse(y1));
        ((JSON.parse(y1)).data).forEach(element => {
            document.getElementById("api").innerHTML += `
            <div class="container">
           
            <div class="Image">
               <img src="${element.imageUrl}  width = "300" height = "300"" alt="" srcset="">
               <h4> ${element.title} </h4> 
               </div> 

            <div class="content">
                <p>${element.content}</p></br>
                <h5>${element.date}</h5>
            </div>

            </div>
        ` 
        });
    });
   
}


