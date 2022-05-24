const router= require('express').Router();
// Deconstructed object
const{getUsers,getOneUser,newUser,updateUser,deleteUser}=require('../../controllers/userControllers');
// api/users/:userId
router.route('./:userId').get(getOneUser).put(updateUser).delete(deleteUser);
// api/users
router.route ('/').get(getUsers).post(newUser);

module.exports=router;