import express from "express";
import { PORT, MONGO_URI } from "./.env";
import mongoose from "mongoose";
import cors from "cors";
import contactRoute from "./routes/contactRoute.js";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";

const app = express();

//middleware to parse json data
app.use(express.json());

//middleware to handle CORS policy
app.use(cors());

//Get request to the root of the application
app.get("/", (req, res) => {
  res.send("Hello World");
});

//route for the contact details
app.use("/contacts", contactRoute);

//connect to the database and listen to the port
mongoose.connect(MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  console.log("MongoDB connected Successfully");
});

//Routes
app.use("/", authRoute);
app.use("/", userRoute);
