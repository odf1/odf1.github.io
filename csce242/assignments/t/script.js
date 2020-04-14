async function displayBeers(){
    let response = await fetch('api/beers/');
    let recipesJSON = await response.json();
    let recipesDiv = document.getElementById("dessert-list");
    recipesDiv.innerHTML = "";

    for(i in recipesJSON){
        let beer = recipesJSON[i];
        recipesDiv.append(getBeerItem(beer));
    }
}

function getBeerItem(beer){
    let recipeSection = document.createElement("section");
    recipeSection.classList.add("beer");

    let aTitle = document.createElement("a");
    aTitle.setAttribute("data-id", beer.id);
    aTitle.href = "#";
    aTitle.onclick = showBeerDetails;
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = beer.name;
    aTitle.append(h3Elem);
    recipeSection.append(aTitle);
    let link = document.createElement("a");
    link.textContent = `Website Link`;
    link.href = beer.link;
    recipeSection.append(link);

    return recipeSection;
}

async function showBeerDetails(){
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/beers/${id}`);

    if(response.status != 200){
        //display an error
        console.log("Error reciving beer");
        return;
    }

    let beer = await response.json();
    document.getElementById("beer-id").textContent = beer.id;
    document.getElementById("txt-name").value = beer.name;
    document.getElementById("txt-abv").value = beer.abv;
    document.getElementById("txt-owner").value = beer.owner;
    document.getElementById("txt-link").value = beer.link;
}

async function addBeer(){
    let beerName = document.getElementById("txt-add-name").value;
    let beerAbv = document.getElementById("txt-add-abv").value;
    let beerOwner = document.getElementById("txt-add-owner").value;
    let beerLink = document.getElementById("txt-add-link").value;

    let beer = {"name":beerName, "abv": beerAbv,"owner":beerOwner,"link":beerLink};
    
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
    let beerAbv = document.getElementById("txt-abv").value;
    let beerOwner = document.getElementById("txt-owner").value;
    let beerLink = document.getElementById("txt-link").value;
    let beer = {"name":beerName, "abv": beerAbv,"owner":beerOwner,"link":beerLink};

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
    let recipeId = document.getElementById("beer-id").textContent;
    
    let response = await fetch(`/api/beers/${recipeId}`,{
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