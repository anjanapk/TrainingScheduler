'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      first: 'First',
      last: 'Last',
      email: 'user@gmail.com',
      phone: '1231231234',
      userRoleId: 4,
      aboutMe: ' About Me ',
      password: 'password',
      isTrainer: 0,

      
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
  {
    first: 'Admin',
    last: 'Last',
    email: 'admin@gmail.com',
    phone: '1231231234',
    userRoleId: 3,
    aboutMe: ' About Me ',
    password: 'admin',
    isTrainer: 1,
     
     createdAt: new Date(),
     updatedAt: new Date(),
   }
    ],{});
   },
    
  

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('users', null, {});
  }
};
