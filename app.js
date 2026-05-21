// const express = require('express')
// const app = express()
// const dotenv = require('dotenv')
// dotenv.config();    
// const mongoose = require('mongoose');
// const DB_URI = process.env.DB_URI
// const PORT = process.env.PORT
// app.use(express.json())
// const cors = require('cors')

// app.use(cors());
// const notesRouter = require('./router/notesRouter')

// app.use('/', notesRouter)

// mongoose.connect(DB_URI).then(() => {
//     console.log('Database connected successfully');
// })
// .catch((err) => {
//     console.log(err.message)
// })

// app.listen(PORT, ()=>{
//     console.log(`server is running on ${PORT}....`)
// })


const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const cors = require("cors");

const notesRouter = require("./router/notesRouter");

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 5000;

// CORS CONFIG
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local frontend
      "https://your-frontend.vercel.app", // deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/", notesRouter);

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

