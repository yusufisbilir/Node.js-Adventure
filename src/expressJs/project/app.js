const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const path = require('path');
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));

//routes
app.use('/admin',adminRoutes);
app.use(userRoutes);

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(port, () => console.log(`Example app listening on ${port} port!`));