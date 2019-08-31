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

function addProject(data) {
  return db('projects')
    .insert(data)
    .then(ids => {
      return "Success."
    });
}

//TASK FUNCTIONS
function findTasks() {
  return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.project_id');
}

function addTask(data) {
  return db('tasks')
    .insert(data)
    .then(ids => {
      return "Success";
    });
}

//RESOURCE FUNCTIONS
function findResources() {
  return db('resources');
}

function addResource(data) {
  return db('resources')
    .insert(data)
    .then(ids => {
      return "Success";
    });
}
