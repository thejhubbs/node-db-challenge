const express = require('express');

const server = express();

server.use(express.json());

const Db = require('./data/model.js');

server.get('/projects', (req, res) => {
  Db.findProjects()
  .then(itemArray => {
    res.json(itemArray);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get items' });
  });
});

server.post('/projects', (req, res) => {
  const data = req.body;
  console.log(data)

  Db.addProject(data)
  .then(newItem => {
    res.status(201).json(newItem);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new item' });
  });
});


module.exports = server;
