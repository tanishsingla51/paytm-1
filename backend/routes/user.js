const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const router = express.Router();

module.exports = router;

const signUpSchema = zod.object({
  username: zod.string().min(3).max(20),
  password: zod.string().min(6),
  firstName: zod.string().min(3).max(20),
  lastName: zod.string().min(3).max(20),
});

router.post("/signup", async (req, res) => {});
