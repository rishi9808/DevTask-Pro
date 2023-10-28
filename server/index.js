import express from 'express';
const app = express();
import mongoose from 'mongoose';
import cors from 'cors';
const PORT = process.env.PORT || 3002;
import dotenv from 'dotenv';

dotenv.config();




import { newTask } from './src/routes/admin/newTask.js';
import { userAuthRouter } from './src/routes/users/userAuth.js';
import { taskWorkRouter } from './src/routes/users/taskWork.js';
import { getTasks } from './src/routes/admin/getTasks.js';
import { userTasks } from './src/routes/users/usertasks.js';

// Middleware
app.use(express.json());
app.use(cors())


app.use("/newtask",newTask);
app.use("/userauth",userAuthRouter)
app.use("/taskwork",taskWorkRouter)
app.use("/gettasks",getTasks)
app.use("/usertasks",userTasks)

const main = async () => {

    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      mongoose.set('strictQuery', false);
      

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
}

main().catch((err) => {
    console.log(err);
}
);
