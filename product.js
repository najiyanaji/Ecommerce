async function getallproducts(){
   var produts=await fetch("https://fakestoreapi.com/products",{
    method:"GET"
})

var data=await produts.json()
let productlist=""
for(let p of data){
    productlist=productlist+`<div class="card" style="width: 18rem;">
  <img src="${p.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-danger">Go somewhere</a>
  </div>
</div>`
}

 document.getElementById("produts").innerHTML=productlist



}

getallproducts()
