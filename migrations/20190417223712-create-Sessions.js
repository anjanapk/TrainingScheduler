'use strict';
  
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
          },
     
       Name: {
            
           type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: {msg: "Name is required"},
            },
          },
          Location: {
          type: Sequelize.STRING,
          allowNull: false,
            validate: {
              notNull: {msg: "Location is required"},
    
          },
        },
          StartTime: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
               notNull: { msg: 'StartTime is required' } 
              },
          },
          Description: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              
              notNull: { msg: 'Description is required' },
    
            },
          },
          TrainerId: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          EventId: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },    
        });
      },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sessions');
  },
};
