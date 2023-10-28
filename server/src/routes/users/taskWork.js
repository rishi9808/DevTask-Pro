import express from "express";
import { usersmodel } from "../../models/users.js";
import { tasksmodel } from "../../models/tasks.js";
import { allocate } from "../admin/allocate.js";

//use http://localhost:3000/taskwork

const router = express.Router();

router.post("/", async function (req, res) {
  console.log(req.body);
  const { userid, taskid, change } = req.body;
  const user = await usersmodel.findOne({ _id: userid });
  const task = await tasksmodel.findOne({ _id: taskid });
  if (change === "done") {
    task.Status = "done";
    user.jobdone = user.jobdone + 1;
    user.availStatus = true;
  } else if (change === "taken") {
    task.Status = "taken";
  }
  await tasksmodel.updateOne({ _id: task._id }, { $set: task });
  await usersmodel.updateOne({ _id: user._id }, { $set: user });
  allocate();

  res.json({ message: "task status updated" });
});

export { router as taskWorkRouter };
