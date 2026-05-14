const { Router } = require('express')
const { getPerfilById } = require('../controllers/perfilController')

const rutas = Router()

rutas.get('/:id', getPerfilbyId)

module.exports = rutas
