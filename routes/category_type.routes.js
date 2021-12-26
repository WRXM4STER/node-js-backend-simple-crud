const Router = require("express")
const router = new Router()
const categoryTypeContoller = require('../controller/category_type.controller')

router.post('/category_type',categoryTypeContoller.createType)
router.get('/category_type',categoryTypeContoller.getTypes)
router.get('/category_type/:id',categoryTypeContoller.getTypeById)
router.put('/category_type',categoryTypeContoller.updateType)
router.delete('/category_type/:id',categoryTypeContoller.deleteType)

module.exports = router