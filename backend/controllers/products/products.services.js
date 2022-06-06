const Product = require('../../models').productos
const { responseOk, responseServerError, responseCreated, responseBadRequest, responseNotFound } = require('../../utils/responses')

const getAll = async (req, res) => {
  try {
    const products = await Product.findAll()
    return responseOk(res, products)
  } catch (e) {
    return responseServerError(res, { message: 'Error getting products' })
  }
}

const create = async (req, res) => {
  const { cantidad, nombre, descripcion, precio, status, imagen } = req.body
  try {
    const product = await Product.create({ cantidad, nombre, descripcion, precio, status, imagen })
    return responseCreated(res, product)
  } catch (e) {
    return responseServerError(res, { message: 'Error creating product' })
  }
}

const update = async (req, res) => {
  const { id } = req.params
  if (isNaN(id)) {
    return responseBadRequest(res, { message: 'Client ID is not a number' })
  }
  try {
    const product = await Product.findOne({ where: { id } })
    if (!product) {
      return responseNotFound(res)
    }
    product.cantidad = req.body.cantidad
    product.nombre = req.body.nombre
    product.descripcion = req.body.descripcion
    product.precio = req.body.precio
    product.status = req.body.status
    product.imagen = req.body.imagen
    await product.save()
    return responseOk(res, { message: 'Product updated successfully' })
  } catch (e) {
    return responseServerError(res, { message: 'Error updating product' })
  }
}

const destroy = async (req, res) => {
  const { id } = req.params
  try {
    const product = await Product.findOne({ where: { id } })
    if (!product) {
      return responseNotFound(res)
    }
    await Product.destroy({ where: { id } })
    return responseOk(res, { message: 'Product deleted successfully' })
  } catch (e) {
    return responseServerError(res, { message: 'Error deleting product' })
  }
}

module.exports = { getAll, create, update, destroy }