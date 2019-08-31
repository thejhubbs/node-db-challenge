const express = require('express');

const server = express();

server.use(express.json());

const Db = require('./data/model.js');

server.get('/projects', (req, res) => {
  Db.findProjects()
  .then(itemArray => {
    res.json( itemArray.map(item =>  { return { ...item, project_completed: !!item.project_completed }} ) );
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





server.get('/tasks', (req, res) => {
  Db.findTasks()
  .then(itemArray => {
    res.json( itemArray.map(item =>  { return { ...item, task_completed: !!item.task_completed,  project_completed: !!item.project_completed }} ) );
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get items' });
  });
});

server.post('/tasks', (req, res) => {
  const data = req.body;
  console.log(data)

  Db.addTask(data)
  .then(newItem => {
    res.status(201).json(newItem);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new item' });
  });
});





server.get('/resources', (req, res) => {
  Db.findResources()
  .then(itemArray => {
    res.json( itemArray );
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get items' });
  });
});

server.post('/resources', (req, res) => {
  const data = req.body;
  console.log(data)

  Db.addResource(data)
  .then(newItem => {
    res.status(201).json(newItem);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new item' });
  });
});


module.exports = server;
