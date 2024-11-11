



let products=[

{name:"iphone"  , price:10000 ,ic:true},

{name:"iphone"  , price:10000 ,ic:true},


{name:"nokia"  , price:10000 ,ic:true},


{name:"iphone"  , price:10000 ,ic:false},


{name:"iphone"  , price:10000 ,ic:false},


{name:"iphone"  , price:10000 ,ic:false},
{name:"iphone"  , price:10000 ,ic:true},

{name:"iphone"  , price:10000 ,ic:true},


{name:"nokia"  , price:10000 ,ic:true},






] 
  
let cont="";

for(i=0;i<products.length;i++){
if(products[i].ic==true){
    cont+= `
    <div class="col-md-6 col-lg-4 " >
    <div class="inner card text-center bg-danger">
        <p>${products[i].name}</p>
        <p>${products[i].price}</p>
        <p>${products[i].ic}</p>
    </div>
    </div>`
}
else{
    cont+= `
    <div class="col-md-6 col-lg-4 " id="cat">
    <div class="inner card text-center bg-primary">
        <p>${products[i].name}</p>
        <p>${products[i].price}</p>
        <p>${products[i].ic}</p>
    </div>
    </div>`
}


}

document.getElementById("cat").innerHTML=cont;