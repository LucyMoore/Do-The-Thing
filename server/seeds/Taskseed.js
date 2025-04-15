export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Tasks').del()
  //adds new entries
  await knex('Tasks').insert([
    {
      id: 1,
      name: 'change adult sheets',
      details: '',
      dueDate: new Date(2026, 11, 11),
      completedDate: null,
      frequency: 14,
      completedBy: '',
      kidFriendly: false,
    },
    {
      id: 2,
      name: 'change kids sheets',
      details: ' both kids',
      dueDate: new Date(2026, 2, 11),
      completedDate: null,
      frequency: 14,
      completedBy: '',
      kidFriendly: false,
    },

    {
      id: 3,
      name: 'Fold Laundry',
      details: ' any and all laundry',
      dueDate: new Date(2026, 2, 11),
      completedDate: null,
      frequency: 14,
      completedBy: '',
      kidFriendly: false,
    },
  ])
}
