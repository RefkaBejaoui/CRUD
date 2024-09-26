const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./DB/connectDB")
app.use(express.json())
const userRouter = require("./Routes/UserR")
app.use("/user", userRouter);


connectDB()

app.listen(process.env.port, (err) =>
  err
    ? console.log(err)
    : console.log(`server is running on http://localhost:${process.env.port}`)
);
