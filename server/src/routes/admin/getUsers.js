import express from 'express';
import  { tasksmodel } from "../../models/tasks.js";
import { allocate } from './allocate.js';
import { usersmodel } from '../../models/users.js';
//use https://devtask-pro.onrender.com/getusers

const router = express.Router();

router.get("/", async function (req, res) {
    
    try {
       const Users = await usersmodel.find();
        
      res.json(Users);
    } catch (err) {
      console.log("Error when getapplied jobs is", err);
      res.json({
        message: "Server not connceted",
      });
    }
  });








export { router as getUsers };