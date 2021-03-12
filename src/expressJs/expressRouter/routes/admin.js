const express = require('express');
const router = express.Router();

//  /admin/add-product
router.get('/add-product',(req,res,next)=>{
    res.send(`
    <html>
    <head></head>
        <body>
            <form action="/admin/add-product" method="POST">
                <input type="text" name="productName">
                <input type="submit" value="Submit">
            </form>
        </body>
    </html>
    `);
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;