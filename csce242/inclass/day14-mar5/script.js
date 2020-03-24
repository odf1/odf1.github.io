class child{
    constructor(firstName, lastName, grade, about){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.about = about;

    }
    get item(){
        let childSection = document.createElement("section");
        childSection.classList.add("dog");

        //ul
        let childtbl = document.createElement("table");
        childSection.append(childtbl);

        let trFname = document.createElement("tr");
        childtbl.append(trFname);
        
        let thFname = document.createElement("th");
        thFname.innerText = `First Name`
        trFname.append(thFname);

        let tdFname = document.createElement("td");
        tdFname.innerText = `${this.firstName}`;
        trFname.append(tdFname);
        //
        let trLname = document.createElement("tr");
        childtbl.append(trLname);

        let thLname = document.createElement("th");
        thLname.innerText = `Last Name`;
        trLname.append(thLname);

        let tdLname = document.createElement("td");
        tdLname.innerText = `${this.lastName}`;
        trLname.append(tdLname);
        //
        let trGrade = document.createElement("tr");
        childtbl.append(trGrade);

        let thGrade = document.createElement("th");
        thGrade.innerText = `Grade`
        trGrade.append(thGrade);

        let tdGrade = document.createElement("td");
        tdGrade.innerText = `${this.grade}`;
        trGrade.append(tdGrade);

        let trAbout = document.createElement("tr");
        childtbl.append(trAbout);
        
        let thAbout = document.createElement("th");
        thAbout.innerText = ``;
        trAbout.append(thAbout);

        let tdAbout = document.createElement("tr");
        tdAbout.innerText = `${this.about}`;
        trAbout.append(tdAbout);
        
                

        return childSection;    
    }


}

window.onload = function(){
    let children = [];
    children.push(new child("kim","houser","13","Eh"));
    children.push(new child("Owen","Fielding","16","test"));
    children.push(new child("Cade","fisher","5","test"));
    let childListDiv = document.getElementById("child-tbl");

    for(let i in children){
        childListDiv.append(children[i].item);
    }
}

