'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')

const PORT = 8080;

const nodeIPs = [3, 4];

const app = express();

const nextIP = () => nodeIPs.push(nodeIPs.shift());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('I am you personal node server. Thanks for GETting at me.\n');
});

app.post('/', (req, res) => {
  let node = nodeIPs[0]-1
  console.log('POST req recieved by load balancer\nSending request to node '+node+'\n');

  request.post('http://172.17.0.'+nodeIPs[0]+':8080', {
    json: {
      todo: 'first todo'
    }
  }, (error, resp, body) => {
    if (error) {
      res.send('Error'+error);
    };
    if (resp) {
      res.send('Your request was proccessed by node '+body.node+'\nWith a delay of '+body.timeout+' seconds\n');
    };
  });

  nextIP();
});

app.listen(PORT);
console.log(`Running on ${PORT}`);
