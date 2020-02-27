function color(){
const color = document.getElementById("txt-color").value;
if(color.toLowerCase()=="red"){
    console.log("red");
}
else{
    console.log("were in the mainframe");
}
}
const btnDisplay = document.getElementById("display");
btnDisplay.onclick = color;