import express from "express";
import { usersmodel } from "../../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { allocate } from "../admin/allocate.js";
//use http://localhost:3002/userauth

const router = express.Router();

router.post("/register", async function (req, res) {
  console.log(req.body);
  const { fullName, userName, passWord, skills} =
    req.body;
  const user = await usersmodel.findOne({ userName });

  if (user) {
    return res.json({ message: "username already exist" });
  }
  const hashPassword = await bcrypt.hash(passWord, 10);
  const newUser = new usersmodel({
    fullName,
    userName,
    passWord: hashPassword,
    skills,
    availStatus:true,
    jobdone:0,
    
  });
  await newUser.save();
  allocate();
  res.json({ message: "User registered successfully" });
});

router.post("/login", async function (req, res) {
  const { userName, passWord } = req.body;
  if(userName=="admin@123" && passWord=="admin"){
    res.json({
      message: "You are admin",
      token: "admin",
      userId: "admin",
    });
  }
  else{
    const user = await usersmodel.findOne({ userName });
  if (!user) {
    return res.json({ message: "User does not exist" });
  }
  const isValid = await bcrypt.compare(passWord, user.passWord);
  if (!isValid) {
    return res.json({ message: "Incorrect Password" });
  }
  const token = jwt.sign({ id: user._id }, "secret");
  res.json({
    message: "You are successfully logined in",
    token: token,
    userId: user._id,
  });
  }
  
});

export { router as userAuthRouter };
