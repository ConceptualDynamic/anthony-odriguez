const { check } = require('express-validator')

const createValidator = [
  check('nombre').trim().isLength({ min: 3 }).toLowerCase().escape()
]
const updateValidator = [
  check('nombre').trim().isLength({ min: 3 }).toLowerCase().escape()
]
const deleteValidator = [
  check('id').isNumeric().escape().notEmpty()
]

module.exports = { createValidator, updateValidator, deleteValidator }