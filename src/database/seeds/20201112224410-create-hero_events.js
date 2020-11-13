'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('hero_events', [
      {
        hero_id: 1,
        event_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hero_id: 2,
        event_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hero_id: 3,
        event_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hero_id: 1,
        event_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hero_id: 3,
        event_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hero_id: 2,
        event_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('hero_events', null, {});
  }
};