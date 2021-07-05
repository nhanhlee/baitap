const { validationResult } = require("express-validator");

function validateRequestSchema(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array()[0].msg);
  } else {
    next();
  }
}

module.exports = validateRequestSchema;
