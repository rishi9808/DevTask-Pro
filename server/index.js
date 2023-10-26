const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const mongoose=require('mongoose');

// Middleware
app.use(express.json());
app.use(cors())

const main = async () => {




    mongoose.connect("mongodb://127.0.0.1:27017/task-managerdb", {
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
