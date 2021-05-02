const express = require('express')
const app = express()
const port = 8800

const mongoose = require ('mongoose');
const dotenv = require ('dotenv');
const helmet = require ('helmet');
const morgan = require('morgan');

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
dotenv.config();
const DB = process.env.MONGO_URL || 'test'
mongoose.connect(DB, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true }, () => {
    console.log('Connected to MongoDB')
})

// Middlewares 
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)


app.get('/', (req, res) => {
  res.json('Welcome to homepage')
})

app.listen(port, () => {
  console.log(`Backend server is runnig at http://localhost:${port}`)
})
