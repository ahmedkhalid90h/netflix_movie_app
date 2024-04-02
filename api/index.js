import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './router/auth.js'; // Correct the path here
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(
    () => console.log('DB Connection Successfull!')
).catch(
    (err) => console.log(err)
);

const app = express();

app.use("/api/auth", authRouter); // Use the correct variable name here

app.listen(4000, () =>
    console.log('Example app listening on port 3000!')
);
