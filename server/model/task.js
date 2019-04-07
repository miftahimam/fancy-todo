const mongoose = require('mongoose')
const Schema = mongoose.Schema

let taskSchema = new Schema({
    title : String,
    description : String,
    status : {
        type : String,
        default : 'not finished'
    },
    due_date : Date
})
// console.log(typeof taskSchema.due_date);



let Task = mongoose.model('Task', taskSchema)

module.exports = Task
