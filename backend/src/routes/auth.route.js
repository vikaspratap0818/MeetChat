import express from "express";

const router=express.Router();
 
router.get("/signup",(req, res) =>{
    res.send("Signup Done");
})

router.get("/login",(req, res) =>{
    res.send("Login Done");
})
router.get("/logout",(req, res) =>{
    res.send("logout Done");
})

export default router;