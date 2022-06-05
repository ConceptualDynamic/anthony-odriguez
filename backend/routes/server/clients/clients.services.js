const Client = require('../../../models/clients')

const getAll = async (req, res) => {
  try {
    const clients = await Client.findAll()
    return { res, clients }
  } catch (e) {
    return e.message
  }
}

module.exports = { getAll }