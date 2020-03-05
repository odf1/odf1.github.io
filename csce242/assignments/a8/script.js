let i = 0;
function showQuotes(){
    let quotes = ["What, you egg! - Shakespeare", "It's harder to read code than write it. - Joel Spolsky","Insanity is doing something over and over again and expecting different results. - Albert Einstein","Don't be Stupid, Stupid. - Jeffrey Houser","If you're afraid to fail, then you're probably going to fail. - Kobe Bryant"];
    let quoteResult = document.getElementById("quotesh3");

    
   quoteResult.textContent = quotes[i];
    i+=1;
    if(i == 5){
        i = 0;
    }
   
}
function test(){
    for(let j = 0;j<6;j++){
        setInterval(rainbow(),7000);
    }
    let img = document.createElement("img");
    img.src = "images/pot.jpg";
    img.width = 50;
    img.height = 50;
    rainbowD.append(img);

}
let t = 0;
let rainbowD = document.getElementById("rainbow");
function rainbow(){
    let colors = ["red","orange", "yellow", "green","blue", "purple"];
    let aP = document.createElement("p");
    aP.style.backgroundColor = colors[t];
    aP.textContent = ".";
    rainbowD.append(aP);
    t++;

  
  
    /*  let p1 = document.getElementById("color-1");
    let p2 = document.getElementById("color-2");
    let p3 = document.getElementById("color-3");
    let p4 = document.getElementById("color-4");
    let p5 = document.getElementById("color-5");
    let p6 = document.getElementById("color-6");
    
    

    p1.style.backgroundColor = colors[0];
    p2.style.backgroundColor = colors[1];
    p3.style.backgroundColor = colors[2];
    p4.style.backgroundColor = colors[3];
    p5.style.backgroundColor = colors[4];
    p6.style.backgroundColor = colors[5];
*/
}

const btnDisplay = document.getElementById("display");
btnDisplay.onclick = test;
setInterval(showQuotes, 3000);

