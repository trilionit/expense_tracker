import React from "react";

export const Transaction = ({transaction}) => {

    const amount = Math.abs(transaction.amount);
    const plusminusClass = transaction.amount < 0 ? "minus" : "plus";
    const value = transaction.amount < 0 ? `-${amount}` : `+${amount}`;
    
    return (
        <li className={plusminusClass}>
            {transaction.name} <span> {value} </span><button className="delete-btn">x</button>
        </li>
    );
}