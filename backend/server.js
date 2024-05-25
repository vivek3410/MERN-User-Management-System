const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const router = require('./router/routes');
dotenv.config();

const app = express();
connectDB()

app.use(cors());
app.use(express.json());
app.use('/api/user',router)

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})


