let XHR = new XMLHttpRequest; 


// Get Data 
XHR.open('GET', 'https://fakestoreapi.com/products'); 
XHR.send()

XHR.addEventListener('readystatechange', function(){

    if(XHR.readyState == 4){
        console.log(JSON.parse(XHR.response))
    }
})

//  POST Data

const product = { title: 'New Product', price: 29.99 };
fetch('https://fakestoreapi.com/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
})
  .then(response => response.json())
  .then(data => console.log(data));

  console.log(product);