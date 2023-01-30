import { body, param, query } from "express-validator";

const validateCreate = [
  body("email")
    .isString()
    .withMessage("email must be a string")
    .exists()
    .withMessage("email must be a provided"),
  body("firstName")
    .isString()
    .withMessage("firstName must be a string")
    .exists()
    .withMessage("firstName must be a provided"),
  body("lastName")
    .isString()
    .withMessage("lastName must be a string")
    .exists()
    .withMessage("lastName must be a provided"),
];

export default {
  validateCreate,
};
