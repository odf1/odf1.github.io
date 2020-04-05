async function getBeers(){
    let response = await fetch("http://localhost:3000/api/beers");
    let beersJSON  = await response.json();
    let beersDiv = document.getElementById("beer-list");

    for(i in beersJSON){
        let beer = beersJSON[i];
        beersDiv.append(getBeerItem(beer));
    }
}

function getBeerItem(beer){
    let beerSection = document.createElement("section");
    
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = beer.name;
    beerSection.append(h3Elem);

    let imgElem = document.createElement("img");
    imgElem.src = "http://localhost:3000/"+ beer.img;
    beerSection.append(imgElem);
    
    let alcContent = document.createElement("p");
    alcContent.textContent = `Alc Content: ${beer.alcContent}`;
    beerSection.append(alcContent);

    let tasteP = document.createElement("p");
    tasteP.textContent = `Taste: ${beer.taste}`;
    beerSection.append(tasteP);

    let location = document.createElement("p");
    location.textContent = `Location: ${beer.location}`;
    beerSection.append(location);

    let similar = document.createElement("p");
    similar.textContent = `Similar Beers: ${beer.similar.join(', ')}`;
    beerSection.append(similar);

    let owner = document.createElement("p");
    owner.textContent = `Owner: ${beer.owner}`;
    beerSection.append(owner);

  
    

    return beerSection;
}

window.onload = function(){
    getBeers();
}