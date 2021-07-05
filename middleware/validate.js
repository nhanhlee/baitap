const {check} = require('express-validator');

let validateRegisterUser = () => {
  return [ 
    //check('username', 'username does not Empty').not().isEmpty(),
    //check('username', 'username more than 6 degits').isLength({ min: 6 }),
    //check('email', 'Invalid does not Empty').not().isEmpty(),
    check('email').isEmail(),
    check('password').isLength({ min: 6 })
  ]; 
}

let validateLogin = () => {
  return [ 
    check('email', 'Invalid does not Empty').not().isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('password', 'password more than 6 degits').isLength({ min: 6 })
  ]; 
}


module.exports = {
    validateRegisterUser,
    validateLogin
};