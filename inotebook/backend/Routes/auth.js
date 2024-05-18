const  express = require('express');
const User = require('../Models/User');
const { body, validationResult } = require('express-validator');

const router = express.Router();


// Create a user using port /api/auth/

router.post('/',[
    body('name','Enter a valid name?').isLength({min:3}),
    body('email','Enter a valid Password ? ').isEmail(),
    body('password').isLength({min:5}),

],(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array() })
    }

    User.create({
        name:req.body.name,
        email:req.body.email,

        password:req.body.password,
    }).then(user=>res.json(user));


})




module.exports = router