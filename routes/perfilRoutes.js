const { Router } = require('express')
const { getEquipo, getEquipoById } = require('../controllers/perfilController')

const rutas = Router()

rutas.get('/:id', getPerfilbyId)

module.exports = rutas