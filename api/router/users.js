import { Router } from 'express';
import User from '../models/User.js';
import CryptoJS from 'crypto-js';
import verify  from '../verifyToken.js';
const router = Router();


// Update
router.put("/:id", verify, async (req,res) => {
    console.log(req.user.isAdmin)
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
router.delete("/:id", verify, async (req,res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json('User has been deleted...')
        } catch (err) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(403).json('You can delete only your account!')
    }
})


// Get
router.get("/find/:id", async (req,res) => {
        try {
            const user = await User.findById(req.params.id)
            const { password, ...info } = user._doc
            res.status(200).json(info)
        } catch (err) {
            res.status(500).json({ message: "Internal Server Error" });
        }
})

// Get All
router.get("/", verify, async (req,res) => {
    const query = req.query.new
    if (req.user.isAdmin){
        try {
            const user = query ? await User.find().limit(10) :await User.find()
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(403).json("You aren\'t allowed to see all users!")
    }
})

// Get User Stats


export default router
