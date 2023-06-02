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

router.patch("/transform/:id", async (req, res) => {
  try {
    const { firstName, lastName, age, email } = req.body;
    const transformedUser = await User.findByIdAndUpdate(
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

    return res
      .status(200)
      .json({ message: "User transformed", transformedUser });
  } catch (error) {
    return res.status(500).json({ message: "Error" });
  }
});

export default router;
