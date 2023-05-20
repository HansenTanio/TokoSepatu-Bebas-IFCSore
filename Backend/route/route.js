import express from "express";

import {
    signUp,
    login,
    getShoes,
    saveShoe,
} from "../config/Database.js";

const router = express.Router();

router.post("/signup", signUp)
router.post("/login", login)
router.get("/shoes", getShoes)
router.post("/shoe", saveShoe)

export default router;