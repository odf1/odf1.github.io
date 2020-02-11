




const firstName = document.getElementById("txt-first-name");
const lastName = document.getElementById("txt-last-name");
const prodName = document.getElementById("txt-product-name");
const prodCount = document.getElementById("txt-product-count");
const prodPrice = document.getElementById("txt-product-price");

const btn1 = document.getElementById("btn-display");
let result = document.getElementById("result");
let ans = 0.0;

function productMult(){
    result.innerHTML = `$(prodCount) * $(prodPrice) * 7`
}

btn1.onclick.productMult;

/*function displayEmotion() {
const firstName = document.getElementById("txt-first-name");
const favColor = document.getElementById("txt-fav-color");
const emotion = document.getElementById("txt-emotion");

let displayP = document.getElementById("ex1-result");
displayP.innerHTML = `${firstName} your fav color is ${favColor}`;

}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;*/