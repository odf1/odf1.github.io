  
function displayEmotion() {
    //gather all 3 pieces of information & write to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;

    /*
    let price = parseFloat(document.getElementById("txt-price").value)
    parseInt(...)
    let tax = document.getElementById("tax-span").textContent() --maybe parsens--
    */
    
    let displayP = document.getElementById("ex1-result");
    let displayP1 = document.getElementById("ex1-result1");
    let displayP2 = document.getElementById("ex1-result2")
   
    const firstError = isBlank(firstName,"error-name");
    const secondError = isBlank(favColor,"error-color");
    const thirdError = isBlank(emotion,"error-emotion");
    if(firstError || secondError || thirdError) return;

    displayP.innerHTML = `Welcome ${firstName}!`;
    displayP1.innerHTML= `You are ${emotion} today`;
    displayP2.innerHTML=`${getEmoji(emotion)}`;
    displayP2.classList.remove("red","blue","green","yellow");
    displayP2.classList.add(favColor.toLowerCase());


}

function getEmoji(emotion){
   const lowerEmo = emotion.toLowerCase();
    
    if(lowerEmo == "happy"){
        return ":)";
    }
    else if(lowerEmo == "sad"){
        return ":(";
    }
    else if(lowerEmo == "silly"){
        return ":P";
    }
    else if(lowerEmo == "angry"){
         return ">:(";
    }
    return "";
}
function isBlank(data, errorSpanId){
    let errorSpan=document.getElementById(errorSpanId);
   
    if(data.trim() == "") {
        errorSpan.classList.remove("hidden");
        return true;
        
    }
}
const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;