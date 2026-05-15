const { Router } = require('express')
const { postLogin, getLoginById } = require('../controllers/loginController')

const rutas = Router()

rutas.post('/', postLogin)
rutas.get('/:id', getLoginById)

module.exports = rutas
