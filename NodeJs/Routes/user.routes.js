const express=require('express');
const router=express.Router();
const auth=require('../Middlewares/auth');
const userController=require('../Controllers/user.controller');

router.post('/register',userController.insertUser);
router.get('/findAll',userController.findAllUser);
router.get('/findOne/:id',userController.findOne);
router.patch('/update/:id',userController.updateUserById);
router.delete('/delete/:id',userController.deleteUserById);
router.post('/login',userController.login);
router.get('/auth',auth.isLoggedIn,userController.findByEmail);


module.exports=router;
