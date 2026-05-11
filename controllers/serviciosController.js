const fs = require('fs').promises

// Devolver la version compacta de todos los servicios
const getServicios = async (req, res) => {
  try {
    // Buscar los datos en el json de "data"
    console.log('- Buscando datos -')
    const data = await fs.readFile('./data/servicios.json', 'utf-8')

    // Parsear el json recibido
    console.log('- Parseando informacion -')
    const servicios = JSON.parse(data)

    // Devolver el json con los datos
    console.log('- Datos enviados con exito -')
    return res.status(200).json(servicios)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: `error ${error}` })
  }
}

module.exports = { getServicios }
