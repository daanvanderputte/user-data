import express from "express";
import User from "../models/user.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  return res.status(200).json(users);
});

router.post("/create", async (req, res) => {
  try {
    const { firstName, lastName, age, email } = req.body;
    const createdUser = await User.create({
      firstName,
      lastName,
      age,
      email,
    });
    return res.status(200).json({ message: "User created", createdUser });
  } catch (error) {
    return res.status(500).json({ message: "Error" });
  }
});
