'use strict';
const {DataTypes} = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      precio: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      status: {
        default: false,
        type: DataTypes.BOOLEAN
      },
      imagen: {
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
  async down(queryInterface) {
    await queryInterface.dropTable('productos');
  }
};