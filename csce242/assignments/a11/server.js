const express = require("express");
const app = express();
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/beers', (req, res) => {
    beers = [];
    beers[0] =
    {
        "name": "Pilsner urquell",
        "alcContent": 4.4,
        "taste": "Light",
        "location": "Plzeň, Czech Republic",
        "similar": ["Rothaus Pils Tannenzäpfle", "Notch Brewing At the Swans", "Seedstock Czech Pilsner"],
        "owner": "Pilsner Urquell Brewery",
        "img": "/images/p.jpeg"
    }
    beers[1] =
    {
        "name": "Guinness",
        "alcContent": 4.3,
        "taste": "Heavy",
        "location": "Dublin Ireland",
        "similar": ["Dogfish Head Oak-Aged Stout", "Deschutes Brewery Black Butte Porter", "Founders Nitro Oatmeal Stout"],
        "owner": "guinness",
        "img": "/images/g.png"
    }
    beers[2] = {
        "name": "Sierra Nevada IPA",
        "alcContent": 5.6,
        "taste": "Hoppy",
        "location": "California",
        "similar": ["SV Torpedo", "Daves Pale Ale", "Sam Adams IPA"],
        "owner": "Sierra Nevada Brewing",
        "img": "/images/s.jpeg"
    }
    beers[3] = {
        "name": "Ghost in the Machine",
        "alcContent": 8,
        "taste": "",
        "location": "Los Angeles",
        "similar": ["Surly Abrasive Ale", "Kern River Citra Double IPA", "Bell's Hopslam"],
        "owner": "Parish Brewing",
        "img": "/images/gh.png"
    }
    beers[4] = {
        "name": "Busch",
        "alcContent": 4.2,
        "taste": "Light",
        "location": "St. Louis",
        "similar": ["KeyStone", "Budweiser", "Bud Light"],
        "owner": "Anheuser Busch",
        "img": "/images/b.jpeg"
    }
    beers[5] = {
        "name": "420 mango kush IPA",
        "alcContent": 4.2,
        "taste": "Fruity",
        "location": "Atlanta",
        "similar": ["SW Blue", "SW 420 IPA", "SV IPA"],
        "owner": "Sweat Water Brewery",
        "img": "/images/4.png"
    }

    res.json(beers);
});



app.listen(3000, () => {
    console.log("Listening on port 3000");
});