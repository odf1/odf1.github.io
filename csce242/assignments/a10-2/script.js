/*  

    Owen Fielding 
    Code Was used from W3Schools
    OpenBreweryDb

*/ 
async function showBreweries(){
    let response = await fetch('https://api.openbrewerydb.org/breweries');
    let breweriesJSON = await response.json();
    let breweriesSection = document.getElementById("breweries-section");
    let test = document.createElement('div');
    test.classList.add("parallax");
    //loop through the breweries
    for(i in breweriesJSON){
        let brewery = breweriesJSON[i];
        let test = document.createElement('div');
        test.classList.add("parallax");
        breweriesSection.append(getBreweryItem(brewery));
        breweriesSection.append(test);
    }
}

function getBreweryItem(brewery){
    let brewerySection = document.createElement("section");
    brewerySection.classList.add("brewery");
    
   
    
    let aElem = document.createElement("a");
    let h2Elem = document.createElement("h2");
    h2Elem.innerText = brewery.name;
    aElem.append(h2Elem);
    aElem.href = brewery.website_url;
    brewerySection.append(aElem);

    let phone = document.createElement('p');
    phone.textContent = `${brewery.phone}`;
    brewerySection.append(phone);

    let pType = document.createElement("p");
    if(brewery.brewery_type == "micro"){
        pType.textContent = `Micro Brewery`;
    }
    else{
        pType.textContent = `Brew Pub`;
    }
    
    brewerySection.append(pType);



    brewerySection.append(getBreweryAddress(brewery));

    return brewerySection;
}

function getBreweryAddress(brewery){
    let pAddress = document.createElement("p");
    pAddress.innerHTML += `${brewery.street}<br> ${brewery.city}, ${brewery.state}<br> ${brewery.country} ${brewery.postal_code}`;
    return pAddress;
}

window.onload = function(){
    this.showBreweries();
}