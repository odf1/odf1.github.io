const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());

let beers = [
    {id:1, name:"Coors", abv:"4.2", owner:"Molson Coors Beverage Company",link:"https://www.coorslight.com/"},
    {id:2, name:"Miller", abv:"4.2", owner:"Molson Coors Beverage Company",link:"https://www.millerlite.com/"},
    {id:3, name:"Voodoo", abv:"7.0",owner:"Voodoo Brewery",link:"https://www.voodoobrewery.com/"},
    {id:4, name:"Sierra Nevada", abv:"6.0",owner:"Sierra Nevada Brewing",link:"https://sierranevada.com/"},
    {id:5, name:"Carolina Craft IPA", abv:"5.3",owner:"Carolina Craft Brewery",link:"https://www.carolinabrewery.com/"},
    {id:6, name:"Sweat Water", abv:"6.5",owner:"Sweat Water Brewery",link:"https://sweetwaterbrew.com/"}

];

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/beers', (req,res)=>{
    res.send(beers);
});

app.get('/api/beers/:id',(req,res)=>{
    const beer = beers.find(r => r.id === parseInt(req.params.id));

    if(!beer) res.status(404).send("The beer with the given id was not found");

    res.send(beer);
});

app.post('/api/beers', (req,res)=>{
    const result = validateBeer(req.body);
    
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    const beer = {
        id:beers.length+1,
        name:req.body.name,
        abv:req.body.abv,
        owner:req.body.owner,
        link:req.body.link
    };
    beers.push(beer);
    res.send(beer);
});

app.put('/api/beers/:id',(req,res)=>{
    const beer =beers.find(r=>r.id === parseInt(req.params.id));
    
    if(!beer) res.status(404).send("Beer with given id was not found");

    const result = validateBeer(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    beer.name = req.body.name;
    beer.abv = req.body.abv;
    beer.owner = req.body.owner;
    beer.link = req.body.link;
    res.send(beer);
});

app.delete('/api/beers/:id',(req,res)=>{
    const beer = beers.find(r=>r.id===parseInt(req.params.id));

    if(!beer){
        req.status(404).send("This beer with the given id was not found");
    }

    const index = beers.indexOf(beer);
    beers.splice(index,1);

    res.send(beer);
});

function validateBeer(beer){
    const schema = {
        name:Joi.string().min(3).required(),
        abv:Joi.string().min(3).required(),
        owner:Joi.string().min(3).required(),
        link:Joi.string().min(3).required()
    };

    return Joi.validate(beer,schema);
}

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})