const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "../../config/config.env"});
const connectDB = async ()=> {
    try {
        const mongoURI = process.env.mongoURI;
        await mongoose.connect(mongoURI, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true  
            }
        )
        console.log(`Database Connected`.cyan.bold);
    }catch(err) {
        console.log(`Error connecting to DB with the following: ${err}`.red);
    }
}

module.exports = connectDB;