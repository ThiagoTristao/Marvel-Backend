'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('hero_events', { 
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
        event_id:{
          type: Sequelize.INTEGER,
          allowNull:false,
          references:{model:'events', key:'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
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
    await queryInterface.dropTable('hero_events');    
  }
};
