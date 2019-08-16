'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log('POST Recieved on Node 2');
  const timeout = Math.random() * 5;

  const delayedResponse = () => {
    res.send({ node: 'two', timeout: timeout })
  };

  setTimeout(delayedResponse, timeout * 1000);
});

app.listen(PORT);
console.log(`Node 2 running on ${PORT}`);
