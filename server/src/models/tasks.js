import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema(
  {
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      default: null,
    },
    title: { type: String },
    Status: { type: String, required: true, default: "pending" },
    reqSkills: { type: String },
    timeReq: { type: Number },
  },
  { collection: "tasks" }
);

export const tasksmodel = mongoose.model("tasks", tasksSchema);
