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

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email})
        !user && res.status(404).json("Wrong password or email!")
        
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8)

        originalPassword !== req.body.password &&
            res.status(401).json("Wrong password or email!")

        const { password, ...info } = user._doc

        res.status(200).json(info)
    } catch (err) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    
})


export default router