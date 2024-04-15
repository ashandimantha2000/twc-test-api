import express from "express";
import mongoose from "mongoose";
import { PORT, MONGO_URI } from "./.env";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});


mongoose
  .connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        console.log("MongoDB connected Successfully");
    })