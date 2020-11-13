'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('series', [
      {
        hero_id: 1 ,
        name: 'O Espetacular Homem-Aranha',
        director: 'Greg Weisman',
        season_numbers: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hero_id: 2 ,
        name: 'The Incredible Hulk Returns',
        director: 'Nicholas J. Corea',
        season_numbers: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hero_id: 3 ,
        name: 'Homem de Ferro ',
        director: 'Greg Pak',
        season_numbers: 2,
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('series', null, {});
  }
};