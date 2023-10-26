const express = require('express');
import { tasksmodel } from "../../models/tasks.js";
//use http://localhost:3002/newjob

const router = express.Router();

router.get("/", async function (req, res) {
   
})


router.post("/", async function (req, res) { //
    const {title,timereq,reqSkills } = req.body;
    const newTask= new tasksmodel({
        title,
        reqSkills,
        timeReq
    });
    await newTask.save();
    //console.log("saved new job and job is",newPostedJob);
    res.json({ message: "saved new job successfully", job: newTask });
})







export { router as newTask };