const router = require('express').Router()
const { addTodo,
        getFilterHari,
        deleteTodo,
        getAllTodo } = require('./../controlers').todoControler

router.get('/getTodo' , getAllTodo)
router.get('/filterHari' , getFilterHari)
router.post('/addTodo', addTodo)
router.delete('/delete/:id' ,deleteTodo)

module.exports = router

