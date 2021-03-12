const express = require('express')
const app = express()

app.use((req,res,next)=>{
    console.log('middleware 1');
    next()
});

app.use((req,res,next)=>{
    res.send('Hello world');
    
});

app.listen(3000, _ =>console.log('port 3000'));