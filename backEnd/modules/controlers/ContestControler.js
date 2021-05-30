const express = require('express');
const dataBase = require('../database/database');
const Contest = require('../database/models/contests');

async function getContest(contestSearchTerm){
    let foundContest;
    foundUni = await Contest.findOne({Name: contestSearchTerm})
                        .then((searchRes) => {
                            if(searchRes != null){return searchRes;}
                            else{return "Contest not found"};
                        });
    return foundContest;
}

function searchContest(req, res){
    
    let contestData = req.body;
    getContest(contestData.name)
        .then((data) => {
            res.send(data);
        });
}

function createContestEntryData(req, res){
    let contestData = req.body;
    const newContest = new Contest({
        'Name': contestData.Name,
        'Time': contestData.Time,
        'Link': contestData.Link,
        'Desc': contestData.Desc
    });

    newContest.save();
    res.sendStatus(500);
}

module.exports = {
    getContest : searchContest,
    postContest : createContestEntryData
}
