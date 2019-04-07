require('dotenv').config()
const jwt = require('jsonwebtoken')
const userModel = require('../model/user')
const bcrypt = require('bcrypt')

class userController {
    static createUser(req,res){
        userModel.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        })
        .then(newUser =>{
            console.log(newUser);
            
            res.status(201).json(newUser)
        })
        .catch(err =>{
            console.log(err,"=============");
            
            res.status(500).json(err)
        })
    }
    static userLogin(req,res){
        console.log(req.body);
        
        userModel.findOne({email : req.body.email})
        .then(foundUser =>{
            console.log(foundUser);
            
            // res.status(200).json(foundUser)
            if(bcrypt.compareSync(req.body.password, foundUser.password)){
                console.log('masuk sini');
                
                res.status(200).json({
                    token : jwt.sign({
                        email : foundUser.email,
                        id : foundUser._id
                    },process.env.JWT_SECRET),
                    data : foundUser
                })
            } else {
                res.status(500).json('you password or username is incorrect')
            }
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }
    
}

module.exports = userController