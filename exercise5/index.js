const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const products = require('./routes/products').default;
const users = require('./routes/users');
const invoices = require('./routes/invoices').default

app.use(bodyParser.json());
app.use(express.static('/products', products));
app.use(express.static('/users', users));
app.use(express.static('/invoices', invoices));

app.use(express.static('ReactApp'))
app.get('/hello', ( res) => {
  res.send('Welcome')
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});