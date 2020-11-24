import mongoose, { Schema, Model } from "mongoose";
import { IUser } from "./IUser";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// If the model User already exists, export that, else create a new User model and export
export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
