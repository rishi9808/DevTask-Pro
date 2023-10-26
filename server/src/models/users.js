import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    userName: { type: String, required: true },
    passWord: { type: String, required: true },
    age: { type: Number },
    district: { type: String, required: true },
    eli_status: { type: String },
    skills: { type: [String] },
    savedJobs: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "postedJobs",
        },
      ],
    },
  },
  { collection: "students" }
);

export const studentModel = mongoose.model("students", studentSchema);
