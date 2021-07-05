var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');
const validate = require('../middleware/validate')

const {check, validationResult } = require('express-validator');

router.post('/register',
    [
        check('username', 'username does not Empty 1').not().isEmpty(),
        check('email', 'Invalid does not Empty 2').not().isEmpty(),
        check('email','loi ko dung dinh dang').isEmail(),
        check('password','ko du 6').isLength({ min: 6 })
    ]
,(req,res)=>{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.sendStatus(201)
},UserController.register)
router.post('/login',UserController.login)

module.exports = router;