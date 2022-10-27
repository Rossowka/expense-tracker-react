import './App.scss';
import React, { useState } from 'react';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { AddTransaction } from './components/AddTransaction';
import { List } from './components/List';


function App() {
  const [balance, setBalance] = useState(0);
  let expenseArray = [];
  let incomeArray = [];

  return (
    <>
      <Header />
      <Balance balance={ balance }/>
      <IncomeExpenses />
      <AddTransaction />
      <List />
    </>
  );
}

export default App;
