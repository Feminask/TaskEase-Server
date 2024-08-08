const mongoose = require('mongoose');

const WITodoSchema = new mongoose.Schema({
   imgUrl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
   
});

const WITodo = mongoose.model('WITodo', WITodoSchema);
module.exports = WITodo;
