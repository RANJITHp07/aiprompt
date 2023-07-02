import mongoose, { Document, Schema, model, models } from "mongoose";

interface Prompt extends Document {
  creator: Schema.Types.ObjectId;
  prompt: string;
  tag: string;
  createdAt: Date;
  updatedAt: Date;
}

const promptSchema: Schema<Prompt> = new mongoose.Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    prompt: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Prompt = models.Prompt || model<Prompt>("Prompt", promptSchema);

export default Prompt;
