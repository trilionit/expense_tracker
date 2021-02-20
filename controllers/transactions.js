//@desc GET ALL TRANSACTIONS
//@route GET /api/transactions
//@access PUBLIC
exports.getTransactions = (req, res) => {
    res.send("GET ALL TRANSACTIONS");
}

//@desc ADD TRANSACTION
//@route POST /api/transactions
//@access PUBLIC
exports.addTransaction = (req, res) => {
    res.send("Add TRANSACTION");
}

//@desc DELETE TRANSACTION
//@route DELETE /api/transactions/:id
//@access PUBLIC
exports.deleteTransaction = (req, res) => {
    res.send(`Delete TRANSACTION ID: ${req.params.id}`);
}