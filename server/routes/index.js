const Router = require ('express')
const router = new Router()
const userRouter = require ('./userRouter')
const weightRouter = require('./weightRouter')
const preferencesRouter = require('./preferencesRouter')

router.use('/user', userRouter);
router.use('/weight', weightRouter);
router.use('/pref', preferencesRouter);

module.exports = router