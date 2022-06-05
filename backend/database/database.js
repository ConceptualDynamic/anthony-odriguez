const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.RDS_DB_NAME || 'conceptual_dynamics',
  process.env.RDS_USERNAME || 'root',
  process.env.RDS_PASSWORD || '',
  {
    host: process.env.RDS_HOSTNAME || 'localhost',
    dialect: 'mysql',
    logging: false
  }
)

module.exports = sequelize