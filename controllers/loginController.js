const fs = require('fs').promises
const fsSync = require('fs')
const path = require('path')

const ruta = path.resolve(__dirname, '../data/perfil.json')

console.log('Ruta:', ruta)
console.log('Existe:', fsSync.existsSync(ruta))

const postLogin = async (req, res) => {
  const { mail, contrasena } = req.body

  try {
    const data = await fs.readFile(ruta, 'utf-8')
    const mails = JSON.parse(data)

    const usuario = mails.find((m) => m.mail === mail)

    if (!usuario) {
      return res.status(401).json({ error: 'No se encontró al Usuario' })
    }

    if (usuario.contrasena !== contrasena) {
      return res
        .status(401)
        .json({ error: 'La contraseña ingresada es incorrecta' })
    }

    return res.status(200).json(usuario)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Error en el login' })
  }
}

const getLoginById = async (req, res) => {
  try {
    const data = await fs.readFile(ruta, 'utf-8')
    const mails = JSON.parse(data)

    const { id } = req.params
    const usuario = mails.find((m) => m.id === parseInt(id))

    if (!usuario) {
      return res
        .status(404)
        .json({ error: `No existe el usuario con id ${id}` })
    }

    return res.status(200).json(usuario)
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: 'No se pudo obtener el detalle del usuario de la id buscada'
    })
  }
}

module.exports = { postLogin, getLoginById }
