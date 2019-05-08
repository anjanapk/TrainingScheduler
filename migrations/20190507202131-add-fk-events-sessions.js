'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addConstraint('Events', ['TraineeId'], {
      type: 'FOREIGN KEY',
      name: 'fkey_Events_Sessions',
       references: {
       table: 'Sessions',
       field: 'id',
     },
     onUpdate: 'CASCADE',
     onDelete: 'CASCADE',
 
     
   });
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.removeConstraint('Events', 'fkey_Events_Sessions')
  }
};
