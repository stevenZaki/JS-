let XHR = new XMLHttpRequest; 


// Get Data 
XHR.open('GET', 'https://fakestoreapi.com/products'); 
XHR.send()

XHR.addEventListener('readystatechange', function(){

    if(XHR.readyState == 4){
        console.log(JSON.parse(XHR.response))
    }
})
