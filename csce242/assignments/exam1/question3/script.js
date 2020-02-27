let test = document.createElement("h2");
let words = document.createTextNode("this is a test");
test.appendChild(words);

let web = document.getElementById("title");
document.body.appendChild(test,web);

let img = document.createElement("img");
img.style.width = "200px";
img.style.height = "200px";
img.src = "https://www.fodors.com/wp-content/uploads/2018/10/mini-horse.jpg";
document.body.append(img);
let test2 = document.createElement("h2");
let words2 = document.createTextNode("this is a test");
test2.appendChild(words2);
document.body.appendChild(test2,test);