const Router = require ('express')
const router = new Router()

router.use('/user', userRouter);

module.exports = router