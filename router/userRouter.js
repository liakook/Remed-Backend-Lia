const router = require('express').Router()
const { addUser, getFilterUser} = require('./../controlers').userControler


router.post('/addUser' ,addUser)
router.get('/filterUser' , getFilterUser)

module.exports = router




