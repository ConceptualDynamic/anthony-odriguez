/* eslint-disable func-call-spacing,no-console,no-unexpected-multiline */
const sequelize = require('./database');

(async function () {
  try {
    //  Connecting to the database
    await sequelize.sync({ force: true })
    console.log('Connection established...')
  } catch (e) {
    console.log(e.message)
  }
})()