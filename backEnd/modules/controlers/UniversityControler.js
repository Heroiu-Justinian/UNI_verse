const express = require('express');
const dataBase = require('../database/database');
const University = require('../database/models/university');

async function getUni(uniSearchTerm){
    let foundUni;
    foundUni = await University.findOne({Name: uniSearchTerm})
                        .then((searchRes) => {
                            if(searchRes != null){return searchRes;}
                            else{return "Uni not found"};
                        });
    return foundUni;
}

function searchUni(req, res){
    
    let UniData = req.body;
    getUni(UniData.name)
        .then((data) => {
            res.send(data);
        });

}

function createUniEntryData(req, res){
    let UniData = req.body;
    const newUniData = new University({
        'Name': UniData.Name,
        'Domain': UniData.Domain,
        'Link': UniData.Link,
        'City': UniData.City
    });

    newUniData.save();
    res.send("DA");
}

module.exports = {
    getUni : searchUni,
    postUni : createUniEntryData
}
