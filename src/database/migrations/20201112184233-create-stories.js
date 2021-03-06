'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('stories', { 
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
        author:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        fan_did:{
          type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('stories');    
  }
};
