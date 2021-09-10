const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema(
    {
        text: {type: String},
        isDone: {type: Boolean}
    },
    {
        timestamps:true
    }
)

const Task = mongoose.model('Task', taskSchema, 'tasks')

module.exports = Task;