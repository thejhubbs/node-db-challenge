
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id'); //Id
      tbl.text('project_name', 128)
        .unique()
        .notNullable(); //Name- unique & required
      tbl.text('project_description'); //Description
      tbl.boolean('project_completed'); //Boolean indicating completion
    })
    .createTable('tasks', tbl => {
      tbl.increments('task_id'); //Id
      tbl.text('task_description', 128)
        .notNullable(); //Name- required
      tbl.text('task_notes'); //Any other notes about the project.
      tbl.boolean('task_completed'); //Boolean indicating completion
    })
    .createTable('resources', tbl => {
      tbl.increments('resource_id');
      tbl.text('resource_name', 128)
        .unique()
        .notNullable(); //Name- unique & required
      tbl.text('resource_description'); //Description
    })
    .createTable('project_resources', tbl => {
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.primary(['resource_id', 'project_id']); //Many-to-many relationship table.
    })


};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('project_resources');
};
