import { Router } from 'express';
import User from '../models/User.js';

const router = Router();

router.post("/register", (req, res) => {
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    })

    const user = newUser.save()
    res.json(user)
})

export default router