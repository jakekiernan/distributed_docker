'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log('Request recieved on node 1');
  const timeout = Math.random() * 3;

  const delayedResponse = () => {
    console.log('Responding to load balancer');
    res.send({ node: 'one', timeout: timeout })
  };

  setTimeout(delayedResponse, timeout * 1000);
});

app.listen(PORT);
console.log(`Node 1 running`);
