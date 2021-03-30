const express = require('express');
const app = express();
const port = 3000;

const sequelize = require('./database');

sequelize
    .authenticate()
    .then(()=>{
        console.log('Connected DB');
    })
    .catch(err=>{
        console.error(err);
    });


app.listen(port, () => console.log(`Example app listening on port ${port}!`));