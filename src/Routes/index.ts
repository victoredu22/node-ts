import { Router } from "express";
import UserController from "../Controllers/User.controller";
import validateUser from "../validators/User.validator";
import { body, param, query, validationResult } from "express-validator";
import { validate } from "../middleware/rejectInvalid";
import ProductController from "../Controllers/Product.controller";

const router = Router();

router.post(
  "/user",
  validate(validateUser.validateCreate),
  UserController.CreateUser
);
router.patch(
  "/user/:id",
  validate(validateUser.validateCreate),
  UserController.upsert
);
router.get("/user", UserController.index);
router.get("/user/:id", UserController.show);

router.post("/product", ProductController.Create);
router.get("/product", ProductController.Index);
router.get("/product/:id", ProductController.Show);
export default router;
