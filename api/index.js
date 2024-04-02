import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './router/auth.js'; 
import usersRouter from './router/users.js'; 
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(
    () => console.log('DB Connection Successfull!')
).catch(
    (err) => console.log(err)
);

const app = express();

app.use(express.json())
app.use("/api/auth", authRouter); // Use the correct variable name here
app.use("/api/users", usersRouter); // Use the correct variable name here

app.listen(4000, () =>
    console.log('Example app listening on port 3000!')
);
