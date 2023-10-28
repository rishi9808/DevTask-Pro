import express from "express";
import { tasksmodel } from "../../models/tasks.js";
import { usersmodel } from "../../models/users.js";
async function allocate() {
  var pendTasks, availUsers;
  try {
    availUsers = await usersmodel.find({ availStatus: true });
    pendTasks = await tasksmodel.find({ Status: "pending" });
  } catch (error) {
    console.log("Error updating job:", error);
    res.json({ message: "Something gone wrong" });
  }
  console.log("entered in allocate");
  console.log(pendTasks);
  if (availUsers && pendTasks) {
    availUsers.sort((a, b) => a.jobdone - b.jobdone);
    for (let i = 0; i < pendTasks.length; i++) {
      let task = pendTasks[i];
      for (let j = 0; j < availUsers.length; j++) {
        let user = availUsers[j];
        if (user.availStatus && user.skills.includes(task.reqSkills)) {
          task.assignedTo = user._id;
          task.Status = "allocated";
          await tasksmodel.updateOne({ _id: task._id }, { $set: task });
          user.availStatus = false;
          await usersmodel.updateOne({ _id: user._id }, { $set: user });
          availUsers[j].availStatus = false;
          break;
        }
      }
    }
  }
}

export { allocate };
