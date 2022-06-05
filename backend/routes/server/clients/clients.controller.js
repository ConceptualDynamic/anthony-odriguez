const services = require('./clients.services')

const getAll = async(req, res) => {
  try {
    return await services.getAll(req, res)
  } catch (e) {
    return e.message
  }
}

module.exports = { getAll }