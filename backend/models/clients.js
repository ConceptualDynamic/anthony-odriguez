'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  clients.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    telefono: DataTypes.STRING,
    email: {
      allowNull:false,
      type: DataTypes.STRING
    },
    fecha_de_nacimiento: DataTypes.DATE,
    status: {
      default: false,
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'clients',
  });
  return clients;
};