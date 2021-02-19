import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    
    const income = transactions.filter(transaction => transaction.amount > 0 );
    const totalIncome = income.reduce((total, obj) => (total + obj.amount), 0);

    const expenditure = transactions.filter(transaction => transaction.amount < 0 );
    const totalExpenditure = expenditure.reduce((total, obj) => (total + obj.amount), 0);
    const balance = totalIncome - (Math.abs(totalExpenditure));
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${balance}</h1>
        </>
    );
}