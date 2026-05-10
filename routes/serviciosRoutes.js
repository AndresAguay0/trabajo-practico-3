const express = require('express')
const { Router } = require('express')
const { getServicios } = require('../controllers/serviciosController')

const rutas = Router()

rutas.get('/', getServicios)

module.exports = rutas
