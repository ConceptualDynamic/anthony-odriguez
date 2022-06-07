'use strict';
const {DataTypes} = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cedula: {
        allowNull: false,
        type: DataTypes.STRING
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING
      },
      apellido: {
        allowNull: false,
        type: DataTypes.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      fecha_de_nacimiento: {
        type: Sequelize.DATE
      },
      status: {
        default: false,
        type: DataTypes.BOOLEAN
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
  async down(queryInterface) {
    await queryInterface.dropTable('clients');
  }
};