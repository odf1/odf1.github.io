function showShoes(){
    console.log("In Show Shoes");
    let shoeDiv = document.getElementById("shoes-section");
    shoeDiv.textContent = "in Shoe div";
}


window.onload = function(){
    this.showShoes();
}