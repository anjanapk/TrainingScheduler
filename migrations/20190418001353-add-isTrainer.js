'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
     return queryInterface.addColumn('Users', 'isTrainer', {
      type: Sequelize.BOOLEAN,
     
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  }).catch (error => {
    // Column already exists !!
  });

  // models.Users.belongsTo(models.Events, {
  //   foreignKey: 'id',
  //   sourceKey: 'TraineeId',
  //   onDelete: 'CASCADE',
  // });

  
    // models.Users.belongsTo(models.Sessions, {
    //   foreignKey: 'id',
    //   sourceKey: 'TrainerId',
    //   onDelete: 'CASCADE',
    // });
  
},
  

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'isTrainer' );
  }
};
