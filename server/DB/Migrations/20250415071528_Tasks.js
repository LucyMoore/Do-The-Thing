/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('Tasks', (table) => {
    table.increments('id')
    table.string('name')
    table.string('details')
    table.string('dueDate')
    table.dateTime('completedDate')
    table.integer('frequency') //0 for 1 off, otherwise num of days
    table.string('completedBy')
    table.boolean('kidFriendly')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('Tasks')
}
