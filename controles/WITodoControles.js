const WITodo = require("../models/WithImgTodoModal");



//to create task with image
exports.createWITodo = async (req, res) => {
    try {
        const { imgUrl, title } = req.body;
        const newWITodo = new WITodo({
            imgUrl,
            title,
           
        });

        const savedWITodo = await newWITodo.save();
        res.status(201).json(savedWITodo);
    } catch (err) {
        res.status(400).json({ message: "Failed to create task", error: err.message });
    }
};


//to get all tasks with image

exports.getWITodo = async (req, res) => {
    const searchData = req.query.search || "";
    try {
        const todos = await WITodo.find({ title: { $regex: searchData, $options: "i" } });
        if (todos.length > 0) {
            res.status(200).json(todos);
        } else {
            res.status(404).json({ message: "No tasks found" });
        }
    } catch (err) {
        res.status(400).json({ message: "Failed to fetch tasks", error: err.message });
    }
};

//to get a task with image by id

exports.getWITodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await WITodo.findById(id);

        if (todo) {
            res.status(200).json(todo);
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err) {
        res.status(400).json({ message: "Failed to fetch task", error: err.message });
    }
};

//to update the task with img

exports.updateWITodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { imgUrl, title } = req.body;

        const updatedTodo = await WITodo.findByIdAndUpdate(
            id,
            { imgUrl, title },
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


// to delete a task with img

exports.deleteWITodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await WITodo.findByIdAndDelete(id);

        if (deletedTodo) {
            res.status(200).json({ message: "Task deleted successfully" });
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err) {
        res.status(400).json({ message: "Failed to delete task", error: err.message });
    }
};