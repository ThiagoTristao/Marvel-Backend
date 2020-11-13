'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('heroes', [
      {
        name: 'Spider Man',
        created_at: new Date(),
        updated_at: new Date(),
      },
    {
      name: 'Hulk',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Iron Man',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('heroes', null, {});
  }
};
