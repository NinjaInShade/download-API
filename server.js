const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { get_download } = require("./controllers/download");
const app = express();

// Middlewares
app.use(cors());

app.get("/:filename", get_download);

app.use((req, res, next) => {
  return res.status(404).json({ message: "Invalid route", errors: true });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
