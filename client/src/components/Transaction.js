import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({transaction}) => {
    const { DeleteTransaction } = useContext(GlobalContext)

    const amount = Math.abs(transaction.amount);
    const plusminusClass = transaction.amount < 0 ? "minus" : "plus";
    const value = transaction.amount < 0 ? `-${amount}` : `+${amount}`;


    return (
        <li className={plusminusClass}>
            {transaction.name} <span> {value} </span><button onClick={()=> DeleteTransaction(transaction._id) } className="delete-btn">x</button>
        </li>
    );
}