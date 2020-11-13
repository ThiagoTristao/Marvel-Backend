'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('series', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement:true,
         allowNull:false
        },
        hero_id:{
          type: Sequelize.INTEGER,
          allowNull:false,
          references:{model:'heroes', key:'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        name:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        director:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        season_numbers:{
          type: Sequelize.INTEGER,
          allowNull:false,
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull:false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull:false,
        }
      });
     
  },

  down: async (queryInterface, Sequelize) => {    
    await queryInterface.dropTable('series');    
  }
};
