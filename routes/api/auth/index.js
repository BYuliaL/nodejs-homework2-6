import { Router } from "express";
import { registration, login, logout } from "../../../controllers/auth";
import guard from "../../../middlewares/guard";
import { regLogValidate } from "./validation";

const router = new Router();

router.post("/registration", regLogValidate, registration);
router.post("/login", regLogValidate, login);
router.post("/logout", guard, logout);

export default router;
