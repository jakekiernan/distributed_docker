'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')

const app = express();
const PORT = 8080;
const nodeIPs = [3, 1, 2];
const nextIP = arr => arr.push(arr.shift());
const getIP = arr => {
  nextIP(arr);
  return arr[0];
}

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('I am you personal node server. Thanks for GETting at me.\n');
});

app.post('/', (req, res) => {
  const node = getIP(nodeIPs)
  console.log(`Request recieved by load balancer\nSending request to worker ${node}`);

  request.post(`http://worker_${node}:8080`, {
    json: {
      todo: 'first todo'
    }
  }, (error, resp, body) => {
    if (error) {
      res.send('Error'+error);
    };
    if (resp) {
      console.log(`Responding to host`);
      res.send('Your request was proccessed by worker '+body.node+'\nWith a delay of '+body.timeout+' seconds\n');
    };
  });

});

app.listen(PORT);
console.log(`Load balancer is running`);
