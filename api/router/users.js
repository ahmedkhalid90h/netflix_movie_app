import { Router } from 'express';
import User from '../models/User.js';
import CryptoJS from 'crypto-js';
import verify  from '../verifyToken.js';
const router = Router();



//Update

router.put("/:id", verify, async (req,res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.decrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString()
        }

        try {
            const updateUser = await User.findByIdAndUpdate(
                    req.params.id,
                    { $set: req.body },
                    { new: true }
                )
            res.status(200).json(updateUser)
        } catch (err) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(403).json('You can update only your account!')
    }
})


// Delete

// Get

// Get All

// Get User Stats


export default router
