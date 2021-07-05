var express = require("express");
var router = express.Router();
const UserController = require("../controllers/UserController");
const validate = require("../middleware/validate");
const validationResult = require("../middleware/validationResult");

router.post(
  "/register",
  validate.validateRegisterUser,
  validationResult,
  UserController.register
);

router.post("/login", UserController.login);

module.exports = router;
