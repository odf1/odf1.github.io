let width = 100;

function displayEmotion() {
    //gather all 3 pieces of information & write to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;
    
    let displayP = document.getElementById("ex1-result");
    let displayEmotion = document.getElementById("ex1-emotion");

    //clear all errors before

    //validate data
    const firstError = isBlank(firstName, "error-name");
    const secondError = isBlank(favColor, "error-fav-color");
    const thirdError = isBlank(emotion, "error-emotion");

    if(firstError || secondError || thirdError) return;

    //display results
    displayP.innerHTML = `Welcome ${firstName}!<br>You are ${emotion} today`;
    displayEmotion.innerHTML = `${getEmoji(emotion)}`;
    displayEmotion.classList.remove("red", "green", "yellow", "blue");
    displayEmotion.classList.add(favColor.toLowerCase());
}

function isBlank(data, errorSpanId){
    if(data == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}

function isNotValidNum(data, errorSpanId){
    if(isNaN(data)) {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}

function getEmoji(emotion){
    const emoCI = emotion.toLowerCase();

    if(emoCI == "happy")
    {
        return ":)"
    }
    else if(emoCI == "sad"){
        return ":(";
    }
    else if(emoCI == "silly"){
        return ":p";
    }
    else if(emoCI == "angry"){
        return ">:|";
    }

    return "";
}

function toggleNav(){
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
}

function displayCount(){
    let startNum = parseInt(document.getElementById("txt-start").value);
    let endNum = parseInt(document.getElementById("txt-end").value);
   // let resultDiv = document.getElementById("ex3-result");
    //if either number is not a number show error appropriately
    if(isNotValidNum(startNum, "error-start") | isNotValidNum(endNum, "error-end"))return;

    document.getElementById("error-start").classList.add("hidden");
    document.getElementById("error-end").classList.add("hidden");
    //if endNum is <= startNum show an error appropratiely
    if(startNum >= endNum){
        close.log("End num must be larger than start num");
        return;
    }
    /*
    console.log(`counting from ${startNum} to ${endNum}`);
    resultDiv.innerHTML="Counting:<ul>";
    for(let i = startNum;i<=endNum;i++){
        resultDiv.innerHTML+=`<li>${i}</li>` ;
    }

    resultDiv.innerHTML+="</ul>";
*/
let h3Elem = document.createElement("h3");
h3Elem.textContent = "Counting: ";
btnCount.after(h3Elem);

let ulElem=document.createElement("ul");
btnCount.after(ulElem);

for(let i = startNum;i <= endNum;i++){
    let liElem = document.createElement("li");
    liElem.textContent = i;
    ulElem.append(liElem);
}
}

function doStuff(){
let h1Elem = document.createElement("h1");
let ulElem = document.createElement("ul");
h1Elem.textContent = "Fourth Example";
this.before(h1Elem);
h1Elem.after(ulElem);


for(let i = 5;i>=1;i--){
    let liElem = document.createElement("li");
    liElem.textContent = i;
    ulElem.append(liElem);
}

}
function growBox(){
  for(let i = 0;i<10;i++){
      width++;
  }
    
    document.getElementById("box").style.setProperty('--dim', width +"px");
console.log("test");
}
function shrinkBox(){
    width-=10;
    document.getElementById("box").style.setProperty('--dim', width +"px");

}

const btnShrinkBox=document.getElementById("btn-shrink-box");
btnShrinkBox.onclick = shrinkBox;

const btnGrowBox=document.getElementById("btn-grow-box");
btnGrowBox.onclick=growBox;

const btnDoStuff = document.getElementById("btn-do-stuff");
btnDoStuff.onclick = doStuff;

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;

const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;

const btnCount = document.getElementById("btn-go");
btnCount.onclick = displayCount;