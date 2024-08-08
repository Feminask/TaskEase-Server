
const Todo = require('../models/TodoModel');


//to create task
exports.createTodo = async (req, res) => {
    try {
        const { title, description, deadline, category } = req.body;
        const newTodo = new Todo({
            title,
            description,
            deadline,  
            category,
        });

        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(400).json({ message: "Failed to create task", error: err.message });
    }
};


// to get all tasks
exports.getTodo = async (req, res) => {
    const searchData = req.query.search || "";
    try {
        const todos = await Todo.find({ title: { $regex: searchData, $options: "i" } });
        if (todos.length > 0) {
            res.status(200).json(todos);
        } else {
            res.status(404).json({ message: "No tasks found" });
        }
    } catch (err) {
        res.status(400).json({ message: "Failed to fetch tasks", error: err.message });
    }
};





//to get a task by id

exports.getTodoById = async (req, res) => {
    try {
        const  {id} = req.params;
        const todo = await Todo.findById(id);

        if (todo) {
            res.status(200).json(todo);
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err) {
        res.status(400).json({ message: "Failed to fetch task", error: err.message });
    }
};


//to update the task

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, deadline, category } = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { title, description, deadline, category },
            { new: true } // Return the updated document
        );

        if (updatedTodo) {
            res.status(200).json(updatedTodo);
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err) {
        res.status(400).json({ message: "Failed to update task", error: err.message });
    }
};


// to delete a task
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (deletedTodo) {
            res.status(200).json({ message: "Task deleted successfully" });
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err) {
        res.status(400).json({ message: "Failed to delete task", error: err.message });
    }
};