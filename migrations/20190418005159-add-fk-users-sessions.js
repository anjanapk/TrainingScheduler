'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addConstraint('Sessions', ['TrainerId'], {
     type: 'FOREIGN KEY',
     name: 'fkey_Users_Sessions',
      references: {
      table: 'Users',
      field: 'id',
    },
    onUpdate: 'no action',
    onDelete: 'no action',
  
    
  });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeConstraint('Users', 'fkey_Users_Sessions')
  }
};
