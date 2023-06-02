// This part I am not sure about

import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchemaTransformed = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  birthYear: { type: String, required: true },
});

const UserTransformed = model("New User", userSchemaTransformed);

export default UserTransformed;
