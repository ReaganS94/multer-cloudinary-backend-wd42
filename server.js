const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./dbinit");
const appRoute = require("./routes/appRoutes");

const app = express();

connectDB();

const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Multer + Cloudinary");
});

app.use("/api", appRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
