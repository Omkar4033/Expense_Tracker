import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer'
// Initial State

const InitialState={
    transactions: [
           
          ]
}
//create Context

export const GlobalContext=createContext(InitialState);

// Provider Component
export const GlobalProvider=({children}) => {

    const [state,dispatch]=useReducer(AppReducer,InitialState);

    //actions
    function DeleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }
    
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        DeleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}