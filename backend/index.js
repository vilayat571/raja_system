const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const db = require("./config/database.js");
const Menu = require("./routes/menu.js");
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("/", Menu);

db();
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started to listen on port ${PORT}`);
});
