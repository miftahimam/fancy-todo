const task = require('../model/task')


class taskController {
    static create(req,res){
        
        task.create({
            title : req.body.title,
            description : req.body.description,
            due_date : new Date(req.body.due_date)
            
        })  
        .then(newTask =>{
            console.log(newTask);
            
            res.status(201).json(newTask)
        })
        .catch(err =>{
            res.status(500).json({
                message : err.message
            })
        })
    }
    static getTask(req,res){
        task.find({})
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(500).json({
                message : err.message
            })
        })
    }
    static deleteTask(req,res){
        task
        .findOneAndRemove(req.params._id, (err, task)=>{
            if(err) return res.status(500).json({
                message : err.message
            })
            const response = {
                message : "success deleted",
                _id : task._id
            }
            return res.status(200).send(response)
        }) 
    }
    static updateTask(req,res){
        console.log(req.body,'======id');
        task
        .findByIdAndUpdate({_id : req.params._id},{$set: {title : req.body.title}}, {new :true})
        .then(data =>{
            console.log(data,"=============");
            
            res.status(200).json({data})
        })
        .catch(err =>{
            console.log(err,'=========');
            
            res.status(500).json({
                message : err.message
            })
        })
    }
}


module.exports = taskController