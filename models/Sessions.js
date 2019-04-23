'use strict';

module.exports = (sequelize, DataTypes) => {
  var Sessions = sequelize.define(
    'Sessions',
    {
      Name: {
        
       type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {msg: "Name is required"},
        },
      },
      Location: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          notNull: {msg: "Location is required"},

      },
      StartTime: {
        type: DataTypes.datetime,
        allowNull: false,
        validate: {
           notNull: { msg: 'StartTime is required' } 
          },
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          
          notNull: { msg: 'Description is required' },

        },
      },
      TrainerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      EventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
        
    },
  },
   
  );
  
  return Sessions;
};
