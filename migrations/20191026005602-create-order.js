'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCustomer: {
        type: Sequelize.INTEGER,
         references: {
            model: 'customers',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      idRoom: {
        type: Sequelize.INTEGER,
         references: {
            model: 'rooms',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      isDone: {
        type: Sequelize.STRING
      },
      isBooked: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.INTEGER
      },
      orderEndTime: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};