
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id');
    })
    .createTable('tasks', tbl => {
      tbl.increments('task_id');
    })
    .createTable('resources', tbl => {
      tbl.increments('resource_id');
    })

    .createTable('ingredients', tbl => {
      tbl.increments('ingredients_id');
      tbl.text('ingredient_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.integer('quanitity')
        .unsigned()
        .notNullable();

      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl.primary(['ingredient_id', 'recipe_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_ingredients');
};
