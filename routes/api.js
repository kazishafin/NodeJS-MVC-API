const express = require('express');
const router = express.Router();
const User = require('../models/user');


// get single user from db
router.get('/user/:id', (req, res, next)=> {
   
   User.findOne({_id: req.params.id}).then((user)=>{
      res.send(user);
   });
   
});


// get all users from db
router.get('/users', (req, res, next)=> {
   
   User.find().then((users)=>{
    res.send(users);
   });
   
});

// create a user
router.post('/user', (req, res, next)=> {
    
   User.create(req.body).then((user)=>{
      res.send(user); 
   }).catch(next);

 });


 // update a user
router.put('/user/:id', (req, res, next)=> {
    
   User.findByIdAndUpdate({_id: req.params.id}, req.body).then(()=> {
      User.findOne({_id: req.params.id}).then((user)=>{
         res.send(user);
      });
      
   });
   
 });

  
 // delete a user
router.delete('/user/:id', (req, res, next)=> {
   
   User.findByIdAndDelete({_id: req.params.id}).then((user)=> {
      res.send(user);
   });
  
 });


 module.exports = router;