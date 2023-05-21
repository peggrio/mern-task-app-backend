const express = require("express")
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController")
const router = express.Router()

//Create a Task
router.post("/", createTask)

//Get/Read Data
router.get("/", getTasks)

//Get/Read a specific Data
router.get("/:id", getTask)

//Delete Data
router.delete("/:id", deleteTask)

//Update Data
router.put("/:id", updateTask)

//Update Data
router.patch("/:id", updateTask)

module.exports = router;
