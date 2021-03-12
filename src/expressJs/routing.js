const express = require('express');
const app = express();
const port = 3000;

app.use('/product',(req,res,next)=>{
    res.send('Product page');
});
app.use('/',(req,res,next)=>{
    res.send('Main page');
});


app.listen(port, () => console.log(`Example app listening on port ${port}`));