const fs = require('fs').promises

const getEquipo = async (req, res) => {
  try {
    const data = await fs.readFile('./data/equipo.json', 'utf-8')
    const equipo = JSON.parse(data)

    if (!equipo) {
      return res.status(404).json({ error: 'No se encontró el equipos' })
    }

    return res.status(200).json(equipo)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: `error ${error}` })
  }
}

const getEquipoById = async (req, res) => {
  const { id } = req.params
  try {
    const data = await fs.readFile('./data/equipo.json', 'utf-8')
    const equipo = JSON.parse(data)

    const equipoId = equipo.find((e) => e.id === parseInt(id))

    if (!equipoId) {
      return res
        .status(404)
        .json({ msg: `No se encontró el equipo con id ${id}.` })
    }

    return res.status(200).json(equipoId)
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ error: `No se pudo obtener el detalle del id n° ${id}` })
  }
}

module.exports = { getEquipo, getEquipoById }
