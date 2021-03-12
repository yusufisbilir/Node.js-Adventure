const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//bodyparser = middleware
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send(`
    <html>
    <head></head>
        <body>
            <form action="/product" method="POST">
                <input type="text" name="productName">
                <input type="submit" value="Submit">
            </form>
        </body>
    </html>
    `);
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
});

app.use('/',(req,res,next)=>{
    res.send('main page')
});


app.listen(port, () => console.log(`Example app listening on port ${port}`));