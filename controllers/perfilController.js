const fs = require('fs').promises

const getPerfilById = async (req, res) => {
  try {
    console.log('- Buscando datos -')
    const data = await fs.readFile('./data/perfil.json', 'utf-8')

    console.log('- Parseando informacion -')
    const perfil = JSON.parse(data)

    console.log('- Buscando la id deseada -')
    const { id } = req.params
    const perfilId = perfil.find((s) => s.id === parseInt(id))

    console.log('- Comprobando validez de la id -')
    if (!perfilId) {
      console.log('- Id no encontrada -')
      return res.status(404).json({ msg: `No existe el perfil con id ${id}` })
    }

    console.log('- Datos enviados con exito -')
    return res.status(200).json(perfilId)
  } catch (error) {
    console.log(error)
    return res.status(500).JSON({
      error: 'No se pudo obtener el detalle del perfil de la id buscada'
    })
  }
}

module.exports = { getPerfilById }
