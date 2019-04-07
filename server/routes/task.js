const express = require('express')
const router = express.Router()
const controller = require('../controller/task')

router.post('/create', controller.create)
router.get('/get', controller.getTask)
router.delete('/delete/:_id', controller.deleteTask)
router.put('/updateTask/:_id', controller.updateTask)



module.exports = router