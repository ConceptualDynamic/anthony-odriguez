const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../backend/database/database')

class Product extends Model {
}

Product.init({
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
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    default: 0,
    validate: {
      isInt: true,
      min: 0
    }
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  precio: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      isDecimal: true
    },
  },
  imagen: DataTypes.STRING,
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