const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const products = require('./routes/products');
const users = require('./routes/users');
const invoices = require('./routes/invoices')

app.use(bodyParser.json());
app.use('/products', products);
app.use('/users', users);
app.use('/invoices', invoices);


app.get('/ReactApp', ( res) => {
  res.send('Welcome')
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});