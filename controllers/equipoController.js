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

module.exports = { getEquipo }
