const express = require('express')
const router = express.Router()
const clientController = require('./clients.controller')
const clientsValidator = require('./clients.validators')

router.get('/', clientController.getAll)
router.post('/', clientsValidator.createValidator, clientController.create)
router.put('/:id', clientsValidator.updateValidator, clientController.update)
router.delete('/:id', clientsValidator.deleteValidator, clientController.destroy)

module.exports = router