const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('homepage')
});

app.get('/api/products', function (req, res) {
  res.send('listed products')
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
});