import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    
    const income = transactions.filter(transaction => transaction.amount > 0 );
    const totalIncome = income.reduce((total, obj) => (total + obj.amount), 0);

    const expenditure = transactions.filter(transaction => transaction.amount < 0 );
    const totalExpenditure = expenditure.reduce((total, obj) => (total + obj.amount), 0);
    return (

        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${totalIncome.toFixed(2)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${totalExpenditure.toFixed(2)}</p>
            </div>
      </div>
    )
}