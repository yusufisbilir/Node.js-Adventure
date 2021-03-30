const express = require('express');
const app = express();
const port = 3000;

const db = require('./database');

db
    .authenticate()
    .then(()=>{
        console.log('Connected DB');
    })
    .catch(err=>{
        console.error(err);
    });


app.listen(port, () => console.log(`Example app listening on port ${port}!`));