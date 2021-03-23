const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1368",
});

connection.connect((err)=>{
    if(err) console.log(err);
    console.log('connected');
});