const express = require('express')
const router = express.Router()
const clientsRouter = require('./clients/clients.router')

//  Routes
router.use('/clients', clientsRouter)

module.exports = router