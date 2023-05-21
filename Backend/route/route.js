import express from "express";

import {
    signUp,
    login,
    getUser,
    getShoes,
    saveShoe,
    deleteShoe,
} from "../config/Database.js";

const router = express.Router();

router.post("/signup", signUp)
router.post("/login", login)
router.get("/user", getUser)
router.get("/shoes", getShoes)
// router.get("/shoe/:id", getShoeByName)
router.post("/shoe", saveShoe)
// router.patch("/shoe/:id", updateShoe)
router.delete("/shoe/:id", deleteShoe)

export default router;