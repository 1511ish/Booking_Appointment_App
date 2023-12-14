const express = require('express');

const sequelize = require('./util/database');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors');

const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/user', userRoutes);

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

sequelize.sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })
