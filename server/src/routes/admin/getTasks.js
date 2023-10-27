import express from 'express';
import  { tasksmodel } from "../../models/tasks.js";
import { allocate } from './allocate.js';
//use http://localhost:3002/gettasks

const router = express.Router();

router.get("/", async function (req, res) {
    const { mode } = req.query;
    let Tasks
    try {
        if(mode==="Finished"){
            Tasks = await tasksmodel.find({ Status: 'done' }).populate('assignedTo').exec();
            
             
        }
        else if(mode==="Pending"){
            Tasks = await tasksmodel.find({ Status: "pending" }).populate('assignedTo').exec();
        }
        else{
             Tasks = await tasksmodel.find({ Status: "allocated" }).populate('assignedTo').exec();
        }
      res.json(Tasks);
    } catch (err) {
      console.log("Error when getapplied jobs is", err);
      res.json({
        message: "Server not connceted",
      });
    }
  });








export { router as getTasks };