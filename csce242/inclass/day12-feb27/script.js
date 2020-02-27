function showToys(){
    
    let toys = ["Drum", "Ball","Car","Bike"];
    let toysResult = document.getElementById("toy-result");
    let arrayUl = document.createElement("ul");
    
    toysResult.innerHTML = "";
    toysResult.append(arrayUl);
    
    for(let i in toys){
        let arrayLi = document.createElement("li");
        
        arrayLi.textContent = toys[i];
        arrayUl.append(arrayLi);
      
       if(arrayUl.classList=="hidden"){
           arrayUl.classList="";
       }
       else{
           arrayUl.classList = "hidden";
       }
    }
}

let color = "red";
function show(){
    let toysResult = document.getElementById("toy-result");
    
    toysResult.classList.toggle("hidden");
    toysResult.style.backgroundColor = color;

    if(color == "red" && !toysResult.classList.contains("hidden")){
        color = "green";
    }
    else if(color == "green" && !toysResult.classList.contains("hidden")){
        color = "red";
    }
}
showToys();

const btnShowToys = document.getElementById("btn-show-toys");
btnShowToys.onclick = setInterval(show, 2000);
