const express = require("express");
require("dotenv").config();
const cors = require("cors");

const { post_download } = require("./controllers/download");
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

app.post("/", post_download);

app.use((req, res, next) => {
  res.status(404).json({ message: "Invalid route", errors: true });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
