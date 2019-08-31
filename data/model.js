const db = require('./dbConfig.js');

module.exports = {
  findProjects,
  addProject,
  findResources,
  addResource,
  findTasks,
  addTask
};


//PROJECTS FUNCTIONS
function findProjects() {
  return db('projects');
}

function addProjects(data) {
  return db('projects')
    .insert(scheme)
    .then(ids => {
      return getById(ids[0]);
    });
}

//TASK FUNCTIONS
function findTasks() {
  return db('tasks');
}

function addTasks(data) {
  return db('tasks')
    .insert(scheme)
    .then(ids => {
      return getById(ids[0]);
    });
}

//RESOURCE FUNCTIONS
function findResources() {
  return db('resources');
}

function addResources(data) {
  return db('resources')
    .insert(scheme)
    .then(ids => {
      return getById(ids[0]);
    });
}
