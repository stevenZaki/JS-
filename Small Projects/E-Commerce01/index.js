
let XHR = new XMLHttpRequest; 

let allProducts = []

// Get Data 
XHR.open('GET', 'https://fakestoreapi.com/products'); 
XHR.send();

XHR.addEventListener('readystatechange', function(){

    if(XHR.readyState == 4){
        allProducts = JSON.parse(XHR.response)
        display()
    }
})

function display(){

  var box = ``
  for( i = 0; i < allProducts.length ; i++ ){
    box+=` 
       <div class="col-lg-4 ">
            <img class = "w-100" src="${allProducts[i].image}" alt="">
            <h3>${allProducts[i].title}</h3>
            <p>${allProducts[i].description}</p>
        </div>
    
    `
  }

  document.getElementById('row').innerHTML=box
}
