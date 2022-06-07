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
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'productos',
  });
  return productos;
};