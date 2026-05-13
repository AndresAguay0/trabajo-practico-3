const express = require('express')
const { Router } = require('express')
const { getEquipo, getEquipoById } = require('../controllers/perfilController')

const rutas = Router()


rutas.get('/', getPerfilbyId)

module.exports = rutas