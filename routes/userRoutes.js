import express from "express";
import User from "../models/user.js";
import UserTransformed from "../models/user-transformed.js";

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

router.patch("/update/:id", async (req, res) => {
  try {
    const { firstName, lastName, age, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        age,
        email,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json("User not found");
    }

    return res.status(200).json({ message: "User updated", updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Error" });
  }
});

// I am not sure how to put the logic in this CRUD operation

router.patch("/transform", async (req, res) => {
  try {
    const { name, age, email, birthYear } = req.body;
    const transformedUser = await UserTransformed.findByIdAndUpdate(
      req.params.id,
      {
        name,
        age,
        email,
        birthYear,
      },
      { new: true }
    );

    if (!transformedUser) {
      return res.status(404).json("User not found");
    }

    return res
      .status(200)
      .json({ message: "User transformed", transformedUser });
  } catch (error) {
    return res.status(500).json({ message: "Error" });
  }
});

export default router;
