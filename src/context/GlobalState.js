import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [
    { id: 0, payee: 'Salary', amount: 1800, category: 'Income' },
    { id: 1, payee: 'Rent', amount: -600, category: 'Immediate Obligations' },
    { id: 2, payee: 'Utilities', amount: -200, category: 'Immediate Obligations' },
    { id: 3, payee: 'Groceries', amount: -150, category: 'True Expenses' },
    { id: 4, payee: 'Gift Card', amount: 25, category: 'Unknown' },
    { id: 5, payee: 'Gym Membership', amount: -30, category: 'Quality of Life' },
  ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}