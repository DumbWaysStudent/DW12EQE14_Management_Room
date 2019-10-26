'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    idCustomer: DataTypes.INTEGER,
    idRoom: DataTypes.INTEGER,
    isDone: DataTypes.STRING,
    isBooked: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    orderEndTime: DataTypes.STRING
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};