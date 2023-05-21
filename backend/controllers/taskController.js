const Task = require("../models/taskModel");

//create Task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//get/read All Tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//get/read a single Task
const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id)
        console.log(typeof (id))
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json(`No tasks with id: ${id}`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//Delete task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id)
        if (!task) {
            return res.status(404).json(`No tasks with id: ${id}`)
        }
        res.status(200).send("Task deleted")
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//Update task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(
            { _id: id },
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        if (!task) {
            return res.status(404).json(`No tasks with id: ${id}`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    createTask, getTasks, getTask, deleteTask, updateTask
}