/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Tasks').del()
  await knex('Tasks').insert([
    {
      id: 1,
      name: 'change adult sheets',
      details: '',
      dueDate: new Date(2024, 11, 11),
      completedDate: null,
      frequency: 14,
      completedBy: '',
      kidFriendly: false,
    },
    {
      id: 2,
      name: 'change kids sheets',
      details: ' both kids',
      dueDate: new Date(2024, 2, 11),
      completedDate: null,
      frequency: 14,
      completedBy: '',
      kidFriendly: false,
    },
  ])
}
