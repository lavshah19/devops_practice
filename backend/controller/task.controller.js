const Task = require("../models/task.model");
const asyncHandler = require("../utils/asyncHandler");
const CustomError = require("../utils/CustomError");


const createTask = asyncHandler(async (req, res) => {

    const { title, description } = req.body;

    if (!title || !description) {
        throw new CustomError("Title and description are required", 400);
    }
    const task = await Task.create({
        title,
        description,
        completed: false,

    });
    res.status(201).json({
        success: true,
        message: "Task created successfully",
        task,
    });
});
const getAllTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json({
        success: true,
        count: tasks.length,
        tasks,
        message: "Tasks fetched successfully",
    });
});
const deleteTask = asyncHandler(async (req, res) => {
const task = await Task.findByIdAndDelete(req.params.id);

if (!task) {
    throw new CustomError("Task not found", 404);
}
res.status(200).json({
    success: true,
    message: "Task deleted successfully",
    task,
});
});

module.exports = { createTask, getAllTasks, deleteTask };