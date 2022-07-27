import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
// import userRouter from "./routes/user.js";
// import tourRouter from "./routes/tour.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});


const MONGODB_URL = `mongodb+srv://Nitish8800:8800@bhumitech.anzew.mongodb.net/Toursit`;
const port = 5000;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
