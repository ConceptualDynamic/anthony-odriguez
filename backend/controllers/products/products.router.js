const express = require('express')
const router = express.Router()
const productController = require('./products.controller')
const productValidator = require('./products.validators')

router.get('/', productController.getAll)
router.post('/', productValidator.createValidator, productController.create)
router.put('/:id', productValidator.updateValidator, productController.update)
router.delete('/:id', productValidator.updateValidator, productController.destroy)

module.exports = router