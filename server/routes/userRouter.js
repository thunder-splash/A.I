const Router = require ('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/registration', userController.registration)
router.post('/destroy', userController.delete)
router.post('/login',userController.login)
router.get('/',userController.seethemall)
router.get('/auth',authMiddleware,userController.check)

module.exports = router