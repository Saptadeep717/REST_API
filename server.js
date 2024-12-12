const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./utils/dbConnect.js");
const userRoute = require("./routes/user.route.js");
const path = require("path");

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/api/v1", userRoute);
app.get("/", (req, res) => {
  res.status(200).send(`Hello.. I am a simple express server `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
