'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.addColumn('Users', 'userRoleId', {
    type: Sequelize.INTEGER,
    references: {
    model: 'UserRoles',
    Key: 'id',
  },
  onUpdate: 'CASCADE',
  onDelete: 'SET NULL',
});
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.removeColumn('Users', 'userRoleId' );
   
  }
};
