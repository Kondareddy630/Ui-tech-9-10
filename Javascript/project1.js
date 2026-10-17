
async function loadCategories()
{

let response=await fetch("https://fakestoreapi.com/products/categories");
let categories=await response.json();

let allcategories=["all",...categories];

allcategories.map((cat)=>{
    
    document.getElementById("categories").innerHTML +=`<option class="text-capitalize">${cat}</option>`

})
  

}

loadCategories();


async function loadData(myurl)
{

    let response=await fetch(myurl);
    let products=await response.json();

    document.getElementById("products").innerHTML="";
    
    products.map((p)=>{

    document.getElementById("products").innerHTML +=
    `
    <div class="col-lg-3 mt-2">
      <div class="card shadow mt-2 p-2">
       <img src=${p.image} class="img-fluid" style="height:180px;object-fit: fill ">

       <div class="card-header">
       <h5 class="text-truncate">${p.title}</h5>
       </div>

       <div class="card-body">

       <dt>Category</dt>
       <dd class="text-capitalize">${p.category}</dd>

       <dt>Price</dt>
       <dd class="text-capitalize">&#8377;${p.price}</dd>

        <dt>Rating</dt>
       <dd class="text-capitalize badge bg-success">${p.rating.rate}</dd>
       
       </div>

       <div class="card-footer">
       <button class="btn btn-danger w-100">Add To Cart</button>
       </div>

      </div>

    </div>

    
    `

    })

}

loadData("https://fakestoreapi.com/products");



function changeCategory()
{

    let selectedCategory=document.getElementById("categories").value;
    
    if(selectedCategory==="all")
    {
        loadData("https://fakestoreapi.com/products");
    }

    else{

        loadData(`https://fakestoreapi.com/products/category/${selectedCategory}`)
    }

}


