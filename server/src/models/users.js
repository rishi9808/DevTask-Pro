const mongoose=require('mongoose');

const usersSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    userName: { type: String, required: true },
    passWord: { type: String, required: true },
    skills: { type: [String] },
    availStatus:{type:Boolean,required:true,default:true},
    jobdone:{type:Number,required:true,default:0},
  },
  { collection: "users" }
);

export const usersmodel = mongoose.model("users", usersSchema);
