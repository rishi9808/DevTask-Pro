const mongoose=require('mongoose');

const tasksSchema = new mongoose.Schema({
    assignedTo:{type: mongoose.Schema.Types.ObjectId, ref: 'users',required:true,default:null},
    title:{type:String, required:true},
    availStatus:{type:String,required:true,default:"pending"},
    reqSkills: { type: [String] },
    timeReq:{type:Number},

    
},
{ collection: "tasks" }
)

export const tasksmodel = mongoose.model("tasks",tasksSchema);