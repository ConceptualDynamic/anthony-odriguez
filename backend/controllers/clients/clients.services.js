const Client = require('../../models').clients
const { responseOk, responseServerError, responseCreated, responseBadRequest, responseNotFound } = require('../../utils/responses')

const getAll = async (req, res) => {
  try {
    const clients = await Client.findAll()
    return responseOk(res, clients)
  } catch (e) {
    return responseServerError(res, { message: 'Error getting clients' })
  }
}

const create = async (req, res) => {
  const { cedula, nombre, apellido, telefono, email, fecha_de_nacimiento, status } = req.body
  try {
    const client = await Client.create({ cedula, nombre, apellido, telefono, email, fecha_de_nacimiento, status })
    return responseCreated(res, client)
  } catch (e) {
    return responseServerError(res, { message: 'Error creating client' })
  }
}

const update = async (req, res) => {
  const { id } = req.params
  if (isNaN(id)) {
    return responseBadRequest(res, { message: 'Client ID is not a number' })
  }
  try {
    const client = await Client.findOne({ where: { id } })
    if (!client) {
      return responseNotFound(res)
    }
    client.cedula = req.body.cedula
    client.nombre = req.body.nombre
    client.apellido = req.body.apellido
    client.telefono = req.body.telefono
    client.email = req.body.email
    client.fecha_de_nacimiento = req.body.fecha_de_nacimiento
    client.status = req.body.status
    await client.save()
    return responseOk(res, { message: 'Client updated successfully' })
  } catch (e) {
    return responseServerError(res, { message: 'Error updating client' })
  }
}

const destroy = async (req, res) => {
  const { id } = req.params
  try {
    const client = await Client.findOne({ where: { id } })
    if (!client) {
      return responseNotFound(res)
    }
    await Client.destroy({ where: { id } })
    return responseOk(res, { message: 'Client deleted successfully' })
  } catch (e) {
    return responseServerError(res, { message: 'Error deleting client' })
  }
}

module.exports = { getAll, create, update, destroy }