'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addConstraint('Users', ['id'], {
      type: 'FOREIGN KEY',
      name: 'fkey_Users_Events',
       references: {
       table: 'Events',
       field: 'TraineeId',
     },
     onUpdate: 'no action',
     onDelete: 'no action',
 
     
   });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Users', 'fkey_Users_Events')
  }
};
