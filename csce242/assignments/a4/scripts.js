





function productMult(){
    var prodCount = document.getElementById('txt-product-count').innerText;
    var prodPrice = document.getElementById('txt-product-price').innerText;
    var pretax = prodCount*prodPrice
    var tax = pretax *.07
    ans =pretax+tax;
    result = ans;
    alert(prodPrice);
    alert(prodCount);
}

var firstName = document.getElementById("txt-first-name");
var lastName = document.getElementById("txt-last-name");
var prodName = document.getElementById("txt-product-name");
/*var prodCount = document.getElementById('txt-product-count');
var prodPrice = document.getElementById('txt-product-price');
var btn = document.getElementById("btn-display");
*/

var btn = document.getElementById("btn-display");

var result = document.getElementById('result').innerText;
var ans = 0.0;
btn.onclick = productMult;