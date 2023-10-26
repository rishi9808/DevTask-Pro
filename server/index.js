const express = require('express');
const app = express();


const cors = require('cors');





const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors())




const main = async () => {


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
}

main().catch((err) => {
    console.log(err);
}
);
