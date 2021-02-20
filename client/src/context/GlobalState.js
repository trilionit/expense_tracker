import React, { createContext, useReducer } from "react";
import axios from "axios";

import AppReducer from "./AppReducer";

const initialState ={
    transactions: []
}

//create context
export const GlobalContext = createContext(initialState);

//globalProvider

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getTransactions = async () => {
        try {
            const allTransactions = await axios.get("/api/transactions");
            console.log(allTransactions.data);
            dispatch({
                type:"GET_TRANSACTIONS",
                payload: allTransactions.data
            })
        }catch(err) {
            console.log(`Failed to fetch transactions. Error returned: ${err}`);
        }
    }
    const AddExpense = async  expense => {
    
            try {
                const add= await axios.post("/api/transactions", expense)
                dispatch({
                    type: "ADD_TRANSACTION",
                    payload: add.data
                })
            }catch(err) {
                console.log(`Failed to Add A New Transaction. Error returned: ${err}`);
            }
            
        
    }
    const DeleteTransaction = async id => {
        try {
            await axios.delete(`/api/transactions/${id}`);
            dispatch({
                type: "DELETE_TRANSACTION",
                payload: id
            })

        }catch(err) {
            console.log(`Failed to delete Transaction. Error returned: ${err}`);
        }
       
    }
    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            getTransactions,
            AddExpense,
            DeleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}



