// Pull in User.js
const User = require('../models/User')
module.exports={
    // GET REQUEST FOR ALL USERS
    getUsers(req,res){
        // Find all users
        User.find()
        // Then take users and return in a readable string
        .then((users)=>res.json(users))
        // Else throw Internal Server error
        .catch((err)=>{
            res.status(500).json(err);
        });
    },
    // GET REQUEST FOR ONE USER
    getOneUser(req,res){
        // Find one user with the parameters of the ID
        User.findOne({_id: res.params.userId})
        // Select version key
        .select('-__V')
        // then pull from user database
        .then((user)=>
        // if there is no user
        !user
        // send status message
        ?res.status(400).json({message:"There is no user"})
        // Else return user in a readable string
        :res.json(user))
        // or throw Internal Server error
        .catch((err)=>{
            res.status(500).json(err);
        });
    },
    // POST REQUEST FOR NEW USER
    newUser(req,res){
        // Create new user
        User.create(req.body)
        // then send user data to the database
        .then((userData)=>res.json(userData))
        // or throw error
        .catch((err)=>{
            res.status(500).json(err);
        });
    },
    // PUT REQUEST TO UPDATE USER
    updateUser(req,res){
        // Find user associated with the id, Replace the value of the field:body, run validation
        User.findOneandUpdate({_id: req.params.userId},{$set: req.body},{runValidators:true, new: true})
        // then take the user
        .then((user)=>
            // if there is no user
            !user
            // return status
            ? res.status(400).json({Message:'No user'})
            // else return user
            : res.json(user))
            // or throw internal server error
            .catch((err)=>{
                res.status(500).json(err);
            });
    },
    // DELETE REQUEST FOR USERS
    deleteUser(req,res){
        // Find the user associated with the ID
        User.findOneandRemove({_id: req.params.userId})
        // Then take the user
        .then((user)=>
        // if there is no user
        !user
        // return status
        ?res.status({message:'No user'})
        // else return user
        :res.json(user))
        // Or throw internal server error
        .catch((err)=>{
            res.status(500).json(err);
        });
    }

}