import express from 'express';
import  { tasksmodel } from "../../models/tasks.js";
import { allocate } from './allocate.js';
//use http://localhost:3002/newtask

const router = express.Router();

router.get("/", async function (req, res) {
   
})


router.post("/", async function (req, res) { //
    const {title,timeReq,reqSkills } = req.body;
    const newTask= new tasksmodel({
        title,
        reqSkills,
        timeReq
    });
    await newTask.save();
    allocate();
    res.json({ message: "saved new job successfully", job: newTask });

})







export { router as newTask };