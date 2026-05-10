const { Router } = require('express')

const rutas = Router()

rutas.get('/', (req, res) => {
  return res.status(200).json({ msg: 'Ruta de equipo activa' })
})

module.exports = rutas
