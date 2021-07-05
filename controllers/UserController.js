var UserModel = require('../models/userModel');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var bodyParser = require('body-parser')

const register = (req,res)=>{
    UserModel.findOne({mail: req.body.mail})
    .then((data)=>{
        if(data){res.json('mail da ton tai')}
        else{
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(req.body.passwork, salt, function(err, hash) {
                    UserModel.create({
                        username: req.body.username,
                        mail: req.body.mail,
                        passwork: hash
                    })
                    .then((data)=>{res.json({mess: 'thanh cong'})})
                    .catch((err)=>{res.json({mess: 'loi'})})
                });
            });
        }
    })
}

const login = async(req,res)=>{
    console.log(req.body)
    try{
        const user = await UserModel.findOne({mail: req.body.mail})
        if(!user) return res.status(400).send("Email is wrong");
        if(user){
            const validPass = await bcrypt.compare(req.body.passwork, user.passwork);
            if(!validPass) return res.status(400).send("Password is wrong");
            const token = jwt.sign({_id : user._id},'pass');
            res.json({"token": token})
        }
    }
    catch(err){
        res.status(401).send(`Email or Password is wrong`);
    }
}

module.exports = {
    register,
    login
}
