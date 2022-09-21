const {Preferences} = require('../models/models')
const ApiError = require('../error/ApiError')

class PreferencesController {
    async create (req, res) {
        const {name, type, title, description, userId} = req.body
        const pref = await Preferences.create({name, type, title, description, userId})
        return res.json(pref)
    }

    async getAll (req, res) {
        const pref = await Preferences.findAll()
        return res.json(pref)
    }

    async getOne (req, res) {
        const {id} = req.params
        const ref = await Preferences.findOne(
            {
                where: {id},
                include: [{model: Preferences, as: 'info'}]
            }
        )
        return res.json(ref)
    }

    async delete (req, res, next) {
        const ToBeRemoved = req.body.name
        const pref = await Preferences.destroy({where: {name: ToBeRemoved}})
        if (!pref){
            return next(ApiError.badRequest('Объект с таким именем не найден'))
        }
        return res.json({message: 'Объект удалён успешно'})
    }
}

module.exports = new PreferencesController()