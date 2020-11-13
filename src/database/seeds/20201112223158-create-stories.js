'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('stories', [
      {
        hero_id: 1 ,
        name: 'O Espetacular Homem-Aranha',
        author: 'Stan Lee',
        fan_did: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hero_id: 3 ,
        name: 'Iron Man vs Doctor Strange',
        author: 'Thiago T. Filho',
        fan_did: true,
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('stories', null, {});
  }
};