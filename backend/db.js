const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://tanishsingla51:9313111030Aa%40@cluster0.edee7nr.mongodb.net/paytm"
);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    minLength: 3,
    maxLength: 20,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
