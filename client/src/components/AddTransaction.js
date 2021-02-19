import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);

    const { AddExpense } = useContext(GlobalContext);

    const handleSubmit = e => {

        e.preventDefault();
        let _id = Math.floor(Math.random() * 100000000);
        
        const expense = { _id, name, amount: parseInt(amount) };

        AddExpense(expense);

    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value) } placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                    (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value) } placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}