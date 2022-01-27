import { Router } from "express";
import { uploadAvatar } from "../../../controllers/users";
import guard from "../../../middlewares/guard";
import { upload } from "../../../middlewares/upload";
// import roleAccess from "../../../middlewares/role-access";
// import { Role } from "../../../lib/constants";

const router = new Router();

router.patch("/avatar", guard, upload.single("avatar"), uploadAvatar);

export default router;
