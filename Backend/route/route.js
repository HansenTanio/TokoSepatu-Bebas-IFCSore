import express from "express";

import {
    signUp,
    login,
    getUser,
    getShoes,
    saveShoe,
} from "../config/Database.js";

const router = express.Router();

router.post("/signup", signUp)
router.post("/login", login)
router.get("/user", getUser)
router.get("/shoes", getShoes)
router.post("/shoe", saveShoe)

export default router;