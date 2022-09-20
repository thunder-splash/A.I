const Router = require('express')
const router = new Router()
const weightController = require('../controllers/weightController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', weightController.create)
router.post('/delete', weightController.delete)
router.get('/:id', weightController.getOne)
router.get('/', weightController.getAll)

module.exports = router