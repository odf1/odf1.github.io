class child{
    constructor(toyName, toyPrice, ageRange, rating, url){
        this.toyName = toyName;
        this.toyPrice = toyPrice;
        this.ageRange = ageRange;
        this.rating = rating;
        this.url = url;

    }
    get item(){
/*
<div class="container"> -->img div
  <img src="img_avatar.png" alt="Avatar" class="image" style="width:100%">
  <div class="middle">
    <div class="text">John Doe</div>
  </div>
</div> */
       

        let imgDiv = document.createElement("div");
        imgDiv.classList.add("container");
        
        let img = document.createElement("img");
        img.src = this.url;
        img.classList.add("image");
        imgDiv.append(img);

        let mDiv = document.createElement("div");
        mDiv.classList.add("middle");
        imgDiv.append(mDiv);

        let txtDiv = document.createElement("div");
        txtDiv.classList.add("text");
        txtDiv.innerText = `Toy Name: ${this.toyName} \n`+`Toy Price: ${this.toyPrice} \n`+`Rating: ${this.rating} \n`+`Age Range: ${this.ageRange} `;
        mDiv.append(txtDiv);


      









        /*
        let childSection = document.createElement("section");
        childSection.classList.add("dog");

        //ul
        let childtbl = document.createElement("table");
        childSection.append(childtbl);

        let trFname = document.createElement("tr");
        childtbl.append(trFname);
        
        let thFname = document.createElement("th");
        
        trFname.append(thFname);

        let tdFname = document.createElement("td");
        tdFname.innerText = `${this.toyName}`;
        trFname.append(tdFname);
        //
        let trLname = document.createElement("tr");
        childtbl.append(trLname);

        let thLname = document.createElement("th");
        thLname.innerText = `Price: `;
        trLname.append(thLname);

        let tdLname = document.createElement("td");
        tdLname.innerText = `${this.toyPrice}`;
        trLname.append(tdLname);
        //
        let trGrade = document.createElement("tr");
        childtbl.append(trGrade);

        let thGrade = document.createElement("th");
        thGrade.innerText = `Age Range: `
        trGrade.append(thGrade);

        let tdGrade = document.createElement("td");
        tdGrade.innerText = `${this.ageRange}`;
        trGrade.append(tdGrade);

        let trAbout = document.createElement("tr");
        childtbl.append(trAbout);
        
        let thAbout = document.createElement("th");
        thAbout.innerText = `Rating: `;
        trAbout.append(thAbout);

        let tdAbout = document.createElement("tr");
        tdAbout.innerText = `${this.rating}`;
        trAbout.append(tdAbout);
        
                
*/
        return imgDiv;    
    }


}

window.onload = function(){
    let children = [];
    children.push(new child("Doll","$8.90","1-3","4 Stars","img/doll.jpg"));
    children.push(new child("House","$50.00 ","1-6"," 5 Stars ","img/house.jpg"));
    children.push(new child("Bike","$40.00","5-8","5 Stars","img/bike.jfif"));
    children.push(new child("Wagon","$35.00","5-8","5 Stars","img/wagon.jpg"));
    children.push(new child("Nerf Gun","$35.00","5-8","3 Stars","img/nerf.jpg"));
    children.push(new child("Truck","$25.00","5-8","4 Stars","img/truck.png"));
    let childListDiv = document.getElementById("child-tbl");

    for(let i in children){
        childListDiv.append(children[i].item);
    }
}

