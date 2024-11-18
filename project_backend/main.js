const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.send('hello world')
});

app.post('/formzad', (req, res) => {
  res.send(200);
})

app.listen(8080);
