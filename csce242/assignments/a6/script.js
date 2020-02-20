function display(){
const firstName = document.getElementById("txt-name1").value;
const firstAge = document.getElementById("txt-age1").value;

const secondName = document.getElementById("txt-name2").value;
const secondAge = document.getElementById("txt-age2").value;

const thirdName = document.getElementById("txt-name3").value;
const thirdAge = document.getElementById("txt-age3").value;

let displayOld = document.getElementById("ex1-old");
let displayYoung = document.getElementById("ex1-young");
let displayMiddle = document.getElementById("ex1-middle");
displayOld.innerHTML = `Oldest is ${getOldest(firstAge,secondAge,thirdAge)} years old`;
displayMiddle.innerHTML=`Middle is ${getMiddle(firstAge,secondAge,thirdAge)} years old`;
displayYoung.innerHTML= `Youngest is ${getYoung(firstAge,secondAge,thirdAge)} years old`;
}
function getOldest(age1,age2,age3){
    if(age1 > age2 && age1 > age3){
       return age1;
    }
    if(age2 > age1 && age2 > age3){
        return age2;
     }
     if(age3 > age1 && age3 > age2){
        return age3;
     }
    
}
function getMiddle(age1,age2,age3){
    if(getYoung(age1,age2,age3) != age1 && getOldest(age1,age2,age3) != age1){
        return age1;
    }
    if(getYoung(age1,age2,age3) != age2 && getOldest(age1,age2,age3) != age2){
        return age2;
    }
        if(getYoung(age1,age2,age3) != age3 && getOldest(age1,age2,age3) != age3){ 
            return age3;
        }
    }

function getYoung(age1,age2,age3){
    if(age1 < age2 && age1 < age3){
       return age1;
    }
    if(age2 < age1 && age2 < age3){
        return age2;
     }
     if(age3 < age1 && age3 < age2){
        return age3;
     }

    
}
function error(age1,age2,age3){
    if(age1 <= 0 || age2 <=0 || age3 <=0 ){
        return "Error invalid age"
    }
    if(age1 >= 110 || age2 >=110 || age3 >=110 ){
        return "Error invalid age"
    
}

function toggleNav(){
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
    
}
const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;
const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = display;