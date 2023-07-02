import mongoose, { Document, Schema,model,models } from "mongoose";

interface User extends Document {
  username: string;
  email: string;
  image?: string;
}

const userSchema: Schema<User> = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);
const User = models.User || model("User", userSchema);

export default User;