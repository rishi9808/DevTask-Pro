import express from "express";
import { usersmodel } from "../../models/users.js";
import { tasksmodel } from "../../models/tasks.js";
import { allocate } from "../admin/allocate.js";

//use http://localhost:3002/usertasks

const router = express.Router();

router.get("/", async function (req, res) {
    const { userid } = req.query;
    let Tasks
    try {
        
        Tasks = await tasksmodel.find({ assignedTo:userid })
    if(userid){
        res.json(Tasks);
    }
    else{
        res.json([]);
    }
      
    } catch (err) {
      console.log("Error when getapplied jobs is", err);
      res.json({
        message: "Server not connceted",
      });
    }
  });

export { router as userTasks };