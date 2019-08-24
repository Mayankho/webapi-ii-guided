const express = require('express');

const Hubs = require('./hubs/hubs-model.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

//M;y favorit thing to do i to type comments in my projects
// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub


module.exports = server;