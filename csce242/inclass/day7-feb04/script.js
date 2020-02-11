//alert("Hello World");
//let myHeader = document.getElementById("my-header");
//myHeader.innerHTML = "Penguins";

function showBoy(){

    //console.log("Boy Function");
    title.innerHTML = "Boys";
    header1.innerHTML = "Boys";
    item1.innerHTML = "Trucks";
    item2.innerHTML = "Trains";
    item3.innerHTML = "Tools";
}
function showGirl(){
    title.innerHTML = "Girls"
    header1.innerHTML = "Girls";
    item1.innerHTML = "Dolls";
    item2.innerHTML = "Pink";
    item3.innerHTML = "Sparkels";
}
function happy(){
    face.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png";
}
function sad()
{
    face.src = "//cdn4.iconfinder.com/data/icons/faces-10/96/sad-512.png";
    
}
let title = document.getElementById("title");

let btnGirl = document.getElementById("btn-girl");
let btnBoy = document.getElementById("btn-boy");

let header1 = document.getElementById("h1-1");

let item1 = document.getElementById("item-1");
let item2 = document.getElementById("item-2");
let item3 = document.getElementById("item-3");

let face = document.getElementById("sad-face");
btnBoy.onclick = showBoy;
btnGirl.onclick = showGirl;

//homework smile has 4 different states and cycle through 
//function cycle(){
//if(face.getAttribute('src') == "https://cdn4.iconfinder.com/data/icons/faces-10/96/sad-512.png"){
 //face.onclick.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png";
//}
//else if(face.getAttribute('src') =="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png") {*/
 //   face.onclick = happy;
//}//
    
