const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const transactionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
    },
    created_at: {
       type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }

})

module.exports= Transaction= mongoose.model("expense", transactionSchema);