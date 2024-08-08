const express=require('express');
const { createTodo, getTodo, getTodoById, updateTodo, deleteTodo } = require('../controles/TodoControles');
const { createWITodo, getWITodo, updateWITodo, deleteWITodo, getWITodoById } = require('../controles/WITodoControles');
const router=new express.Router()

router.post('/Task', createTodo);
router.get('/Tasks', getTodo);
router.get('/Task/:id', getTodoById);
router.put('/update/Task/:id', updateTodo);
router.delete('/delete/Task/:id', deleteTodo);

//for tasks with imageUrl
router.post('/ImgTask',createWITodo)
router.get('/ImgTasks', getWITodo);
router.get('/ImgTask/:id', getWITodoById);
router.put('/update/ImgTask/:id', updateWITodo);
router.delete('/delete/ImgTask/:id', deleteWITodo);





module.exports=router