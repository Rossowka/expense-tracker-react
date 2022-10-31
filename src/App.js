import './App.scss';
import React, { useState, useEffect } from 'react';

import { GlobalProvider } from './context/GlobalState';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { AddTransaction } from './components/AddTransaction';
import { List } from './components/List';

function App() {


  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpenses />
      <AddTransaction />
      <List />
    </GlobalProvider>
  );
}

export default App;
