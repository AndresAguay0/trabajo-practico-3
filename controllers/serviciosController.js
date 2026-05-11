const fs = require('fs').promises

// Devolver la version compacta de todos los servicios
const getServicios = async (req, res) => {
  try {
    // Buscar los datos en el json de "data"
    const data = await fs.readFile('./data/servicios.json', 'utf-8')
    console.log('Buscando datos')
    const servicios = JSON.parse(data)

    // Comprobar si el json esta vacio
    console.log('Comprobando datos')
    if (!servicios) {
      return res.status(404).json({ error: 'No se encontraron los servicios' })
    }

    // Devolver el json con los datos
    return res.status(200).json(servicios)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: `error ${error}` })
  }
}

module.exports = { getServicios }
