import express from "express";
const router = express.Router();

import { users, signup, signin, googleSignIn } from "../controllers/user.js";

router.post("/signup", signup);
router.get("/", users);
// router.post("/signin", signin);
// router.post("/googleSignIn", googleSignIn);

export default router;
