const Router = require('express')
const router = new Router()
const preferencesController = require('../controllers/preferencesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', preferencesController.create)
router.post('/delete', preferencesController.delete)
router.get('/:id', preferencesController.getOne)
router.get('/', preferencesController.getAll)

module.exports = router