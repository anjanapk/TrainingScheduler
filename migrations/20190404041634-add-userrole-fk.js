'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.addColumn('Users', 'userRoleId', {
        type: Sequelize.INTEGER,
        references: {
        model: 'UserRoles',
        Key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }).catch (error => {
      // Column already exists !!
    });
  },
        
    
    down: (queryInterface, Sequelize) => {
    
      return queryInterface.removeColumn('Users', 'userRoleId' );
    
  }
};
