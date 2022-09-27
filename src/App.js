import './App.scss';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { AddTransaction } from './components/AddTransaction';
import { List } from './components/List';

function App() {
  return (
    <>
      <Header />
      <Balance />
      <IncomeExpenses />
      <AddTransaction />
      <List />
    </>
  );
}

export default App;
