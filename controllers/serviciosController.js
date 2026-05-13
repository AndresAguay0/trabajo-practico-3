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

const getServiciosById = async (req, res) => {
  try {
    // Buscar los datos en el json de "data"
    console.log('- Buscando datos -')
    const data = await fs.readFile('./data/serviciosDetalle.json', 'utf-8')

    // Parsear el json recibido
    console.log('- Parseando informacion -')
    const servicios = JSON.parse(data)

    // Obtener las id encontradas y buscar las que coincidan con el request
    console.log('- Buscando la id deseada -')
    const { id } = req.params
    const servicioId = servicios.find((s) => s.id === parseInt(id))

    // Comprobacion de la id conseguida (fijarse que no este vacia)
    console.log('- Comprobando validez de la id -')
    if (!servicioId) {
      console.log('- Id no encontrada -')
      return res.status(404).json({ msg: `No existe el servicio con id ${id}` })
    }

    // Devolver el json con los datos
    console.log('- Datos enviados con exito -')
    return res.status(200).json(servicioId)
  } catch (error) {
    console.log(error)
    return res.status(500).JSON({
      error: 'No se pudo obtener el detalle del servicio de la id buscada'
    })
  }
}

module.exports = { getServicios, getServiciosById }
