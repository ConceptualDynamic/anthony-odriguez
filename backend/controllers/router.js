const express = require('express')
const router = express.Router()
const clientsRouter = require('./clients/clients.router')
const productsRouter = require('./products/products.router')

//  Routes
router.use('/clients', clientsRouter)
router.use('/products', productsRouter)

module.exports = router