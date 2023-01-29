import { Router } from "express";
import UserController from "../Controllers/User.controller";
// Old node way
// const express = require('express');
// const Router = express.Router;
const router = Router();
router.post("/user", UserController.CreateUser);
router.get("/user", UserController.getUser);
router.patch("/:id");
router.delete("/:id");
export default router;
