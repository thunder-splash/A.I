const {Weight} = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require("path");

class WeightController {
    async create (req, res) {
        const {name, type, description, info} = req.body
        const weight = await Weight.create({name, type, description, info})
        return res.json(weight)
    }

    async getAll (req, res) {
        const weight = await Weight.findAll()
        return res.json(weight)
    }

    async getOne (req, res) {
        const {id} = req.params
        const weight = await Weight.findOne(
            {
                where: {id},
                include: [{model: Weight, as: 'info'}]
            }
        )
        return res.json(weight)
    }

    async delete (req, res, next) {
        const ToBeRemoved = req.body.name
        const weight = await Weight.destroy({where: {name: ToBeRemoved}})
        if (!weight){
            return next(ApiError.badRequest('Объект с таким именем не найден'))
        }
        return res.json({message: 'Объект удалён успешно'})
    }
}

module.exports = new WeightController()