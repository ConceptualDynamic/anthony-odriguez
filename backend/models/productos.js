'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productos.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        notEmpty: true
      }
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull:false,
      validate: {
        notEmpty: true
      }
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    status: {
      default: false,
      type: DataTypes.BOOLEAN
    },
    imagen: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'productos',
  });
  return productos;
};