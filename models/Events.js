'use strict';

module.exports = (sequelize, DataTypes) => {
  var Events = sequelize.define(
    'Events',
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
    },
      StartTime: {
        type: DataTypes.DATE,
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
      TraineeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
      EventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
        
    },
  );
   
  Events.associate = function (models) {        
  
          
   
        models.Events.belongsTo(models.Users, {
          foreignKey: 'TraineeId',
          sourceKey: 'id',
          onDelete: 'CASCADE',
            })
           
          }
        
      
  
      
  return Events;
};
