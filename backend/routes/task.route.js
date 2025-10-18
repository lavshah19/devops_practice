const { createTask, getAllTasks, deleteTask } = require('../controller/task.controller');
const express = require('express');
const router = express.Router();

router.post('/create', createTask);
router.get('/all', getAllTasks);
router.delete('/delete/:id', deleteTask);

module.exports = router;
