const express = require('express')
const router = express.Router()
const controller = require('../controller/user')

router.post('/createUser', controller.createUser)
router.post('/login', controller.userLogin)




module.exports = router