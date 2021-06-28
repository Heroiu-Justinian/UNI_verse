const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
 
dotenv.config();
const router = require('./modules/router/router')

const port = 8000;

app.use(router);

app.listen(port)
