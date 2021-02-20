const Transaction = require("../models/Transactions");

//@desc GET ALL TRANSACTIONS
//@route GET /api/transactions
//@access PUBLIC
exports.getTransactions = async (req, res) => {
    try {
        
        const AllTransactions = await Transaction.find({})
        return res.status(200).json(AllTransactions);

    }catch(err) {
        console.log(`Error Retrieving Data: ${err}`.red);
    }

    res.send("GET ALL TRANSACTIONS");
}

//@desc ADD TRANSACTION
//@route POST /api/transactions
//@access PUBLIC
exports.addTransaction = async (req, res) => {
    try {
        //perform additional validation
        const expense = req.body;
        const add = await Transaction.create(expense)
        console.log(add);
        return res.status(202).json(add);
    }catch(err) {
        console.log(`Error Adding Data: ${err}`.red);
    }
    
}

//@desc DELETE TRANSACTION
//@route DELETE /api/transactions/:id
//@access PUBLIC
exports.deleteTransaction = (req, res) => {
    res.send(`Delete TRANSACTION ID: ${req.params.id}`);
}