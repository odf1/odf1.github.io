const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/beers", {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=>console.log("Connected to mongodb"))
    .catch(err => console.error("couldn't connect to mongdb", err));

const beerSchema = new mongoose.Schema({
    name:String,
    description:String,
    owner:String,
    abv:String,
    colors:String,
    darkness:String
});

const Beer = mongoose.model('Beer',beerSchema);

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/beers', (req,res)=>{
    getBeers(res);
});

async function getBeers(res){
    const beers = await Beer.find();
    console.log(beers);
    res.send(beers);
}

app.get('/api/beers/:id',(req,res)=>{
    getBeer(req.params.id, res);
});

async function getBeer(id, res){
    const beer = await Beer.findOne({_id:id});
    console.log(beer);
    res.send(beer);
}

app.post('/api/beers', (req,res)=>{
    const result = validateBeer(req.body);
    
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    const beer = new Beer({
        name:req.body.name,
        description:req.body.description,
        owner:req.body.owner,
        abv:req.body.abv,
        colors:req.body.colors,
        darkness:req.body.darkness
    });

    createBeer(beer,res);
});

async function createBeer(beer, res){
    const result = await beer.save();
    console.log(result);
    res.send(beer);
}

app.put('/api/beers/:id',(req,res)=>{
    const result = validateBeer(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    updateBeer(res, req.params.id, req.body.name, req.body.description,req.body.owner,req.body.abv,req.body.colors,req.body.darkness);
});

async function updateBeer(res, id, name, description,owner,abv,colors,darkenss){
    const result = await Beer.updateOne({_id:id},{
        $set:{
            name:name,
            description:description,
            owner:owner,
            abv:abv,
            colors:colors,
            darkness:darkenss
        }
    })

    res.send(result);
}

app.delete('/api/beers/:id',(req,res)=>{
    removeBeer(res,req.params.id);
});

async function removeBeer(res,id){
    const beer = await Beer.findByIdAndRemove(id);
    res.send(beer);
}

function validateBeer(beer){
    const schema = {
        name:Joi.string().min(3).required(),
        description:Joi.string().min(3).required(),
        owner:Joi.string().min(3).required(),
        abv:Joi.string().min(3).required(),
        colors:Joi.string().min(3).required(),
        darkness:Joi.string().min(3).required()
    };

    return Joi.validate(beer,schema);
}

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})