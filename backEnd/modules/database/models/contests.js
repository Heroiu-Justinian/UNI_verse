const mongoose = require('mongoose');

const Contest = mongoose.model('Contest',

    {
        Name: String,
        Time: String,
        Link: String,
        Desc: String
    });

module.exports = Contest;
