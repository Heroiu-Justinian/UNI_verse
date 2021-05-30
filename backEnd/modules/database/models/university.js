const mongoose = require('mongoose');

const University = mongoose.model('University',

    {
        Name: String,
        City: String,
        Domain: String,
        Link: String,
        PozitieUniRank: Number,
        Rating: Number
    });

module.exports = University;
