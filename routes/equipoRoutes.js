const express = require('express')
const { Router } = require('express')
const { getEquipo, getEquipoById } = require('../controllers/equipoController')

const rutas = Router()

rutas.get('/', getEquipo)
rutas.get('/:id', getEquipoById)

module.exports = rutas
