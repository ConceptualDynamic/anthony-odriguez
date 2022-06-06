const { responseException } = require('../../utils/responses')
const services = require('./products.services')

const getAll = async (req, res) => {
  try {
    return await services.getAll(req,res)
  } catch (e) {
    return responseException(res, e)
  }
}
const create = async (req, res) => {
  try {
    return await services.create(req, res)
  } catch (e) {
    return responseException(res, e)
  }
}

const update = async (req, res) => {
  try {
    return await services.update(req, res)
  } catch (e) {
    return responseException(res, e)
  }
}

const destroy = async (req, res) => {
  try {
    return await services.destroy(req, res)
  } catch (e) {
    return responseException(res, e)
  }
}


module.exports = { getAll, create, update, destroy }