const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../backend/database/database')

class Client extends Model {
}

Client.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  cedula: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  telefono: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  fechaDeNacimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  estatus: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: false
  },
  disabledAt: {
    type: DataTypes.DATE
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
}, {
  sequelize,
  modelName: 'product',
  tableName: 'product',
  paranoid: true
})

module.exports = Client
