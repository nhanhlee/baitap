var UserModel = require('./models/UserModel');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');

function checkCookie(req, res, next){
    var cookie = req.cookies.user;
    var id = jwt.verify(cookie, 'pass').id;
    UserModel.findOne({_id : id })
    .then((data)=>{
        if(data){
            console.log(data)
            next();
        }else{
            res.json({mess:'chua dang nhap'})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = {checkCookie}