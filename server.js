const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const app = express();

dotenv.config({path: "../config/config.env"});


//connectdb
const connectDB = require("./config/connectDB");
connectDB();

app.get("/", (req, res)=> {
    res.send("TRANSACTIONS");
})

const PORT = process.env.PORT || 5000;
const node_env = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server running in ${node_env} mode on port ${PORT}`.yellow.bold));
