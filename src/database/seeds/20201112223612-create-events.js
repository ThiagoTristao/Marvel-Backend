'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('events', [
      {
        name: 'Comic Con',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'BGS',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'E3',
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('events', null, {});
  }
};