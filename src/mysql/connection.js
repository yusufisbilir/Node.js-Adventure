const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1368",
    database:"nodejsdb"
});

connection.connect((err)=>{
    if(err) console.log(err);

    //create database
    let queryDB = "CREATE DATABASE nodejsDB";

    //create table
    queryDB = "CREATE TABLE customers(name VARCHAR(30),adres VARCHAR(100))";

    //delete table
    queryDB = "DROP TABLE customers";

    queryDB = "CREATE TABLE students(id INT AUTO_INCREMENT PRIMARY KEY, name varchar(30),adress varchar(100))";

    // add column to table
    queryDB = "ALTER TABLE students ADD COLUMN tckno CHAR(11)";

    //add data
    queryDB = "INSERT INTO students (name,adress,tckno) values ('Yusuf','Kocaeli',12345678911)";

    queryDB = "INSERT INTO students (name,adress,tckno) values ?";
    values = [
        ["abc","abc",22345678911],
        ["abcd","abcd",32345678911],
        ["abcde","abcde",42345678911],
    ]

    connection.query(queryDB,[values], (err)=>{
        if(err) throw err;
        console.log(queryDB);
    });
});