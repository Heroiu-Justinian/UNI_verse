const mongoose = require('mongoose');
const dataBase = mongoose.connection;

console.log(process.env.MONGOURL)

mongoose.connect(process.env.MONGOURL,
    {
    useNewUrlParser: true,
        useUnifiedTopology: true
    });

module.exports = dataBase;
