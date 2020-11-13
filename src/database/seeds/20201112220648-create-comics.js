'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comics', [
      {
        hero_id: 1 ,
        name: 'O espetacular Homem Aranha: Aranhaverso',
        author: 'Stan Lee',
        publisher: ' Panini',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hero_id: 2 ,
        name: 'Hulk: World War Hulk',
        author: 'Greg Pak',
        publisher: ' Marvel',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        hero_id: 2 ,
        name: 'Hulk Contra o Mundo ',
        author: 'Greg Pak',
        publisher: ' Panini',
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comics', null, {});
  }
};