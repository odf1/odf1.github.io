let margin = 10;
function moveMan(){
    margin +=5;
    imgMan.style.setProperty('--mar',margin +"px");
    changeImg();
}
function changeImg(){
    if(imgMan.src == "https://png2.cleanpng.com/sh/2f73f8473e65d9aff8dde155ad67f92b/L0KzQYm3V8A6N5RrgZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TgdidJxuhtk2Y3zsgH7okwQueJZ0iN5uLXnmf7A0lQJidqR1eeRuboSwRbO7VMIyPWJqUdYAYUixQIeBVsg2QWk2TaU6MUm0RoS6WcU4QF91htk=/kisspng-computer-icons-walking-clip-art-people-icon-transparent-5b442151e9d5a8.0686859815311916339578.png"){
    imgMan.src = "https://icons.iconarchive.com/icons/icons8/windows-8/256/Sports-Running-Man-icon.png";
    }
else if(imgMan.src == "https://icons.iconarchive.com/icons/icons8/windows-8/256/Sports-Running-Man-icon.png"){
    imgMan.src = "https://png2.cleanpng.com/sh/2f73f8473e65d9aff8dde155ad67f92b/L0KzQYm3V8A6N5RrgZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TgdidJxuhtk2Y3zsgH7okwQueJZ0iN5uLXnmf7A0lQJidqR1eeRuboSwRbO7VMIyPWJqUdYAYUixQIeBVsg2QWk2TaU6MUm0RoS6WcU4QF91htk=/kisspng-computer-icons-walking-clip-art-people-icon-transparent-5b442151e9d5a8.0686859815311916339578.png";
    }
}
let total = 0;
function growGrad(){
    let n = parseInt(document.getElementById("txt-add").value)/100;
    total+=n;
    grad.style.setProperty('--red',total+"%");
}
const imgMan = document.getElementById("img-man");
imgMan.onclick=moveMan;


const grad = document.getElementById("grad");
const btnGrow = document.getElementById("display");
btnGrow.onclick = growGrad;
//imgMan.onclick=changeImg;