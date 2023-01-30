import { Router } from "express";
import UserController from "../Controllers/User.controller";
import validateUser from "../Controllers/User.validator";
import { body, param, query, validationResult } from "express-validator";
import { validate } from "../middleware/rejectInvalid";

const router = Router();

router.post(
  "/user",
  validate(validateUser.validateCreate),
  UserController.CreateUser
);
router.get("/user", UserController.index);
router.get("/:id", UserController.show);
router.patch("/:id", UserController.upsert);

export default router;
