const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const bodyParser = require("body-parser");

//config
dotenv.config({path: "../config/config.env"});
const connectDB = require("./config/connectDB");


//routes
const transactions = require("./routes/transactions");

const app = express();


//connectdb
connectDB();

//middleware
app.use(bodyParser.json());

app.use("/api/transactions", transactions);





const PORT = process.env.PORT || 5000;
const node_env = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server running in ${node_env} mode on port ${PORT}`.yellow.bold));
