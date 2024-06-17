const mongoose = require("mongoose");

const url =
  "mongodb+srv://hamza:mjgb6dwpqI0GYDlf@test.vmfnwxb.mongodb.net/?retryWrites=true&w=majority&appName=test";

db = () => {
  mongoose
    .connect(url)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err.message));
};

module.exports = db;
