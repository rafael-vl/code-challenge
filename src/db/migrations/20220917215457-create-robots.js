'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('robots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numberOfArms: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'number_of_arms'
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING
      },
      manufacturedBy: {
        allowNull: true,
        type: Sequelize.STRING,
        field: 'manufactured_by'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('robots');
  }
};