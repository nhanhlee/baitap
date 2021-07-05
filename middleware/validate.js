const { check } = require("express-validator");

let validateRegisterUser = [
  //check('username', 'username does not Empty').not().isEmpty(),
  //check('username', 'username more than 6 degits').isLength({ min: 6 }),
  //check('email', 'Invalid does not Empty').not().isEmpty(),
  check("email")
    .exists()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("The email is invalid format"),
  check("password")
    .exists()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("The password must be at least 6 characters"),
];

let validateLogin = [
  check("email", "Invalid does not Empty").not().isEmpty(),
  check("email", "Invalid email").isEmail(),
  check("password", "password more than 6 degits").isLength({ min: 6 }),
];

module.exports = {
  validateRegisterUser,
  validateLogin,
};
