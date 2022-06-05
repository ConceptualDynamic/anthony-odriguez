const { check } = require('express-validator')

const createValidator = [
  check('cedula').trim().isLength({ min: 3 }).escape(),
  check('nombre').trim().isLength({ min: 3 }).toLowerCase().escape(),
  check('apellido').trim().isLength({ min: 3 }).toLowerCase().escape()
]
const updateValidator = [
  check('cedula').trim().isLength({ min: 3 }).escape(),
  check('nombre').trim().isLength({ min: 3 }).toLowerCase().escape(),
  check('apellido').trim().isLength({ min: 3 }).toLowerCase().escape()
]
const deleteValidator = [
  check('id').isNumeric().escape().notEmpty()
]

module.exports = { createValidator, updateValidator, deleteValidator }

