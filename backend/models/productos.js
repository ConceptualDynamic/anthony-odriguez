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
      require: true,
      default: 0
    },
    nombre: {
      allowNull: false,
      require: true,
      type: DataTypes.STRING
    },
    descripcion: {
      type: DataTypes.TEXT,
      require: true,
      allowNull:false
    },
    precio: {
      type: DataTypes.DECIMAL,
      require: true,
      allowNull: false
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