const fs = require('fs').promises

const getPerfilById = async (req, res) => {

    try {

        const data = await fs.readFile('./data/perfil.json', 'utf-8')

        const perfiles = JSON.parse(data)

        const { id } = req.params

        const perfil = perfiles.find(
            (p) => p.id === parseInt(id)
        )

        if (!perfil) {
            return res.status(404).json({
                msg: 'Perfil no encontrado'
            })
        }

        return res.status(200).json(perfil)

    } catch (error) {

        console.log(error)

        return res.status(500).json({
            error: 'Error interno'
        })
    }
}

module.exports = { getPerfilById }
