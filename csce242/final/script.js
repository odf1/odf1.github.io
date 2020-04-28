async function displayBeers(){
    let response = await fetch('api/beers/');
    let beersJSON = await response.json();
    let beersDiv = document.getElementById("beer-list");
    beersDiv.innerHTML = "";

    for(i in beersJSON){
        let beer = beersJSON[i];
        beersDiv.append(getBeerItem(beer));
    }
}

function getBeerItem(beer){
    let beerSection = document.createElement("section");
    beerSection.classList.add("beer");

    let aTitle = document.createElement("a");
    aTitle.setAttribute("data-id", beer._id);
    aTitle.href = "#";
    aTitle.onclick = showBeerDetails;
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = beer.name;
    aTitle.append(h3Elem);
    beerSection.append(aTitle);

    return beerSection;
}

async function showBeerDetails(){
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/beers/${id}`);

    if(response.status != 200){
        //display an error
        console.log("Error reciving beeeeeeer");
        return;
    }

    let beer = await response.json();
    document.getElementById("beer-id").textContent = beer._id;
    document.getElementById("txt-name").value = beer.name;
    document.getElementById("txt-description").value = beer.description;
    document.getElementById("txt-owner").value = beer.owner;
    document.getElementById("txt-abv").value = beer.abv;
    document.getElementById("txt-colors").value = beer.colors;
    document.getElementById("txt-darkness").value = beer.darkness;
}

async function addBeer(){
    let beerName = document.getElementById("txt-add-name").value;
    let beerDescription = document.getElementById("txt-add-description").value;
    let beerOwner = document.getElementById("txt-add-owner").value;
    let beerAbv = document.getElementById("txt-add-abv").value;
    let beerColors = document.getElementById("txt-add-colors").value;
    let beerDarkness = document.getElementById("txt-add-darkness").value;
    let beer = {"name":beerName, "description": beerDescription,"owner": beerOwner,"abv":beerAbv,"colors":beerColors,"darkness":beerDarkness};
    
    let response = await fetch('/api/beers',{
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(beer),
    });

    if(response.status != 200){
        console.log("ERROR posting data");
        return;
    }

    let result = await response.json();
    console.log(result);
    displayBeers();
}

async function editBeer(){
    let beerId = document.getElementById("beer-id").textContent;
    let beerName = document.getElementById("txt-name").value;
    let beerDescription = document.getElementById("txt-description").value;
    let beerOwner = document.getElementById("txt-owner").value;
    let beerAbv = document.getElementById("txt-abv").value;
    let beerColors = document.getElementById("txt-colors").value;
    let beerDarkness = document.getElementById("txt-darkness").value;

    let beer = {"name":beerName, "description": beerDescription,"owner":beerOwner,"abv":beerAbv,"colors":beerColors,"darkness":beerDarkness};

    let response = await fetch(`/api/beers/${beerId}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body: JSON.stringify(beer)
    });

    if(response.status != 200){
        console.log("Error updating beer");
        return;
    }

    let result = await response.json();
    displayBeers();
}

async function deleteBeer(){
    let beerId = document.getElementById("beer-id").textContent;
    
    let response = await fetch(`/api/beers/${beerId}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        }
    });

    if(response.status != 200){
        console.log("Error deleting");
        return;
    }

    let result = await response.json();
    displayBeers();
}

window.onload = function(){
    this.displayBeers();

    let addBtn = document.getElementById("btn-add-beer");
    addBtn.onclick = addBeer;

    let editBtn = document.getElementById("btn-edit-beer");
    editBtn.onclick = editBeer;

    let deleteBtn = document.getElementById("btn-delete-beer");
    deleteBtn.onclick = deleteBeer;
}