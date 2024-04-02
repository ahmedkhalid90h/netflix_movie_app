import { Router } from 'express';
import CryptoJS from 'crypto-js';
import User from '../models/User.js';

const router = Router();

router.post("/register", async (req, res) => {
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password: CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString()
    })

    try {
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).json({ message: "Username is already taken" });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
})

export default router