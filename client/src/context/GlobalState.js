import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState ={
    transactions: [
        { _id: 1, text: 'Flower', amount: -20 },
        { _id: 2, text: 'Salary', amount: 300 },
        { _id: 3, text: 'Book', amount: -10 },
        { _id: 4, text: 'Camera', amount: 150 }
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//globalProvider

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const AddExpense = expense => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: expense
        })
    }
    const DeleteTransaction = id => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }
    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            AddExpense,
            DeleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}



